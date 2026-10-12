# Owner rules — printed into every session by .claude/hooks/session-start.sh

These are the owner's standing orders. They apply to every task in this repository,
in every session, after every context compaction. Rules marked [ENFORCED] are also
blocked mechanically by .claude/hooks/guard-bash.sh.

## Merging and deploying
- "Merge when green" is standing: merge a PR only when EVERY check on its current
  head is green, with `gh pr merge <n> --merge`. [ENFORCED]
- Never `gh pr merge --auto` — master has no protection, it merges instantly. [ENFORCED]
- A PR showing no checks: run `gh pr view <n> --json mergeable` FIRST. A merge
  conflict makes GitHub start no checks at all. [ENFORCED at merge time]
- After merging, confirm master CI passed and `/version.json` shows the commit, then
  send ONE plain-English summary.

## Cost — the owner pays per token
- One background job per task (wait → merge → confirm live), then ONE message.
  No interim status polling. When asked "update?", read that job's output in one call.
- Cheapest explanation first: conflicts, typos, missing files — before theories.
- Before merging a CI change, list what new jobs SHARE with existing ones (cache
  keys, artifacts, concurrency groups, `needs`). Shared Playwright cache broke
  Firefox on 2026-10-12.
- Do not widen scope. Do what was asked; name other findings in one line and stop.

## Working environment
- No temporary files or folders: no /tmp, no mktemp, no scratch files in the repo.
  Use pipes, heredocs and stdin. [ENFORCED for /tmp and mktemp]
- Deliverables for the owner go only in
  ~/Library/CloudStorage/Dropbox/Croatian Learning Application/System of Record/
- Report times in CEST from the computer clock. Plain English; the owner is not a
  software engineer.
- Never write to production Firestore on a user's behalf. Never claim to operate
  the owner's browser.
- Cloudflare: the account is on the Workers paid plan (since 2026-09-28). The
  deploy token "nh-cf-rules-edit" has D1 Edit; AI_QUOTA_DB is bound. Do not re-ask.
