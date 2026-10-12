#!/bin/bash
# PreToolUse guard for Bash — enforces the [ENFORCED] rules in .claude/OWNER-RULES.md.
# Exit 2 blocks the command and shows the reason. Any internal error allows the
# command (exit 0) so a broken guard can never stop all work.
set -uo pipefail
cmd=$(jq -r '.tool_input.command // ""' 2>/dev/null) || exit 0
block() { echo "BLOCKED by owner rules (.claude/OWNER-RULES.md): $1" >&2; exit 2; }

# No temp files: standalone /tmp paths or mktemp. Harness-owned task output under
# /private/tmp/claude-* is read-only bookkeeping and is not matched (no word boundary).
# Only USE is matched — a /tmp/ path, cd or a redirect into /tmp, or running mktemp —
# so prose that merely names them (a commit message, a rules file) is not blocked.
if grep -Eq '(^|[[:space:]"'"'"'=:>(])/tmp/|(cd|>|>>)[[:space:]]*/tmp([[:space:]";)]|$)|(^|[;&|`]|\$\()[[:space:]]*mktemp([[:space:]);]|$)' <<<"$cmd"; then
  block "no temporary files or folders — use pipes, heredocs or stdin."
fi

# Merging.
# Only an actual invocation counts: `gh pr merge` at the start of a command (line
# start, or after ; & | or $( ), read up to the end of that command. A PR body or
# commit message that QUOTES the command is prose, not a merge.
merge=$(grep -Eo '(^|[;&|]|\$\()[[:space:]]*gh[[:space:]]+pr[[:space:]]+merge([[:space:]][^;&|)]*)?' <<<"$cmd" | head -1)
if [ -n "$merge" ]; then
  grep -Eq -- '--auto' <<<"$merge" && block "never use --auto (master has no protection; it merges instantly)."
  n=$(grep -Eo 'merge[[:space:]]+[0-9]+' <<<"$merge" | grep -Eo '[0-9]+$' | head -1)
  [ -z "$n" ] && block "name the PR number explicitly so its checks can be verified."
  state=$(gh pr view "$n" --json mergeable,headRefOid -q '.mergeable' 2>/dev/null) || exit 0
  [ "$state" = "CONFLICTING" ] && block "PR #$n has a merge conflict — resolve it first."
  checks=$(gh pr checks "$n" --json bucket,name 2>/dev/null) || block "could not read PR #$n's checks."
  total=$(jq length <<<"$checks")
  [ "$total" -eq 0 ] && block "PR #$n has no checks — check mergeable, and wait for checks to start."
  notgreen=$(jq -r '.[]|select(.bucket!="pass" and .bucket!="skipping")|"\(.bucket) \(.name)"' <<<"$checks")
  [ -n "$notgreen" ] && block "PR #$n is not green yet: $(tr '\n' ';' <<<"$notgreen")"
fi
exit 0
