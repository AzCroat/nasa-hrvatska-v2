#!/bin/bash
#
# Patched copy of Claude Code's stop-hook git check.
#
# WHY THIS LIVES IN THE REPO
# --------------------------
# The active hook is ~/.claude/stop-hook-git-check.sh, which is outside the repo
# and gets re-provisioned from a stock copy — the fix below was observed being
# reverted repeatedly within a single working session, not merely on container
# restart. Keeping the patched version here makes it durable and reviewable.
#
# TO APPLY (after any restart, or whenever the hook starts reporting merge
# commits authored by noreply@github.com):
#
#   cp scripts/claude-hooks/stop-hook-git-check.sh ~/.claude/stop-hook-git-check.sh
#
# TO CHECK whether the live hook is currently patched:
#
#   grep -q default_ref ~/.claude/stop-hook-git-check.sh && echo patched || echo stock
#
# WHAT THE PATCH FIXES — see the commented block further down.

# Read the JSON input from stdin
input=$(cat)

# Check if stop hook is already active (recursion prevention)
stop_hook_active=$(echo "$input" | jq -r '.stop_hook_active')
if [[ "$stop_hook_active" = "true" ]]; then
  exit 0
fi

# Check if we're in a git repository - bail if not
if ! git rev-parse --git-dir >/dev/null 2>&1; then
  exit 0
fi

# Bail if there's no remote to push to. Every error path below asks the user
# to "push to the remote branch" — meaningless without a remote, and
# unsatisfiable if signing also requires a source. This case arises when CCR
# was launched against a local repo with no github remote (sources=[]) and
# the container's cwd has a leftover .git from a cached resume.
if [[ -z "$(git remote)" ]]; then
  exit 0
fi

# Check for uncommitted changes (both staged and unstaged)
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "There are uncommitted changes in the repository. Please commit and push these changes to the remote branch." >&2
  exit 2
fi

# Check for untracked files that might be important
untracked_files=$(git ls-files --others --exclude-standard)
if [[ -n "$untracked_files" ]]; then
  echo "There are untracked files in the repository. Please commit and push these changes to the remote branch." >&2
  exit 2
fi

current_branch=$(git branch --show-current)
if [[ -n "$current_branch" ]]; then
  if git rev-parse "origin/$current_branch" >/dev/null 2>&1; then
    upstream="origin/$current_branch"
  else
    upstream="origin/HEAD"
  fi

  # ── PATCH (vs. the stock CCR hook) ────────────────────────────────────────
  # Commits already merged into the remote default branch are PUBLISHED history
  # and must never be amended or force-pushed. They show up in the range below
  # because of an ordinary workflow: after a PR merges, the local feature branch
  # is reset onto origin/master while the REMOTE feature branch still points at
  # the old tip. "$upstream..HEAD" then spans master's merge commits — authored
  # by GitHub (dependabot[bot], or the repo owner's address on a squash-merge),
  # not by us.
  #
  # Unpatched, the hook reports those as "Unverified" and instructs the model to
  # `--reset-author` them and push. Following that literally means reattributing
  # other people's commits and force-pushing master, which this project forbids
  # outright (Cloudflare deploys from master). Excluding them is what makes the
  # remaining output actionable.
  #
  # Applied only when the default branch differs from $upstream: on the default
  # branch itself the exclusion would hide genuinely unpushed local commits.
  exclude=()
  default_ref=$(git symbolic-ref --quiet --short refs/remotes/origin/HEAD 2>/dev/null)
  if [[ -z "$default_ref" ]]; then
    for candidate in origin/master origin/main; do
      if git rev-parse --verify --quiet "$candidate" >/dev/null 2>&1; then
        default_ref="$candidate"
        break
      fi
    done
  fi
  if [[ -n "$default_ref" && "$default_ref" != "$upstream" ]]; then
    exclude=(--not "$default_ref")
  fi
  # ── end patch ─────────────────────────────────────────────────────────────

  # Check for local commits that GitHub will show as "Unverified": either no
  # signature at all (%G? == N), or signed with a committer email other than
  # noreply@anthropic.com (the identity CCR's signing key is registered to).
  # Only run when commit signing is configured. Note: %G? is N for unsigned
  # commits; signed-but-locally-unverifiable commits report B/U/E, so this is
  # a reliable presence check even though CCR doesn't configure local verification.
  if [[ "$(git config --type=bool commit.gpgsign 2>/dev/null)" == "true" ]]; then
    # PATCH 2: do not trust %G? alone to mean "unsigned".
    #
    # This container has no gpg.ssh.allowedSignersFile, so git cannot even
    # attempt SSH signature verification and reports %G? = N — the same code it
    # uses for a genuinely unsigned commit. Every correctly-signed commit made
    # here therefore looks unsigned to the stock check, and gets reported in the
    # window between committing and pushing. (The stock hook's own comment
    # assumes such commits report B/U/E; that holds only when a signers file is
    # configured.) Confirmed by inspection: the flagged commits carry a
    # "gpgsig -----BEGIN SSH SIGNATURE-----" header in the raw object.
    #
    # So treat a commit as unsigned only when the object really has no gpgsig
    # header. A wrong committer email is still reported on its own, unchanged.
    unverifiable=$(
      git log --format='%h %G? %ce' "$upstream..HEAD" "${exclude[@]}" 2>/dev/null |
      while read -r sha gsig email; do
        if [[ "$email" != "noreply@anthropic.com" ]]; then
          echo "$sha $gsig $email"
        elif [[ "$gsig" == "N" ]] && ! git cat-file -p "$sha" 2>/dev/null | grep -q '^gpgsig'; then
          echo "$sha $gsig $email"
        fi
      done
    )
    if [[ -n "$unverifiable" ]]; then
      echo "There are commit(s) on branch '$current_branch' that GitHub will show as Unverified (missing signature, or committer email is not noreply@anthropic.com):" >&2
      echo "$unverifiable" >&2
      echo "Please run 'git config user.email noreply@anthropic.com && git config user.name Claude', then 'git commit --amend --no-edit --reset-author' for the tip commit, or 'git rebase --exec \"git commit --amend --no-edit --reset-author\" $upstream' for earlier commits, then push." >&2
      exit 2
    fi
  fi

  unpushed=$(git rev-list --count "$upstream..HEAD" "${exclude[@]}" 2>/dev/null) || unpushed=0
  if [[ "$unpushed" -gt 0 ]]; then
    if [[ "$upstream" == "origin/$current_branch" ]]; then
      echo "There are $unpushed unpushed commit(s) on branch '$current_branch'. Please push these changes to the remote repository." >&2
    else
      echo "Branch '$current_branch' has $unpushed unpushed commit(s) and no remote branch. Please push these changes to the remote repository." >&2
    fi
    exit 2
  fi
fi

exit 0
