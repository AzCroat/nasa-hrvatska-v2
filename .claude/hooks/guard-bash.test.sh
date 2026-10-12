#!/bin/bash
# Cases for guard-bash.sh: expected exit code, then the command. Run:
#   bash .claude/hooks/guard-bash.test.sh
# Merge cases that need GitHub use a fake `gh` on PATH (created under .claude/hooks,
# removed at the end).
set -u
cd "$(dirname "$0")/../.." || exit 1
G=.claude/hooks/guard-bash.sh
fail=0
check() {
  local want=$1 cmd=$2 path=${3:-$PATH}
  printf '%s' "{\"tool_input\":{\"command\":$(jq -Rs . <<<"$cmd")}}" | PATH="$path" "$G" >/dev/null 2>&1
  local got=$?
  if [ "$got" = "$want" ]; then echo "ok   $got  $cmd"; else echo "FAIL want $want got $got  $cmd"; fail=1; fi
}

# Temp files: use is blocked, prose and harness task files are not.
check 2 'ls /tmp/x'
check 2 'cd /tmp'
check 2 'echo hi > /tmp/a'
check 2 'f=$(mktemp)'
check 2 'mktemp -d'
check 0 'echo "no temp files: /tmp, mktemp)"'
check 0 'cat /private/tmp/claude-501/x/tasks/a.output'
check 0 'git status'

# Merging.
check 2 'gh pr merge 5 --auto --merge'
check 2 'gh pr merge --merge'
check 0 'gh pr create --body "never run `gh pr merge --auto` here"'
check 2 'cd repo && gh pr merge 5 --auto'
F=.claude/hooks/.fakegh
mkdir -p "$F"
fake() { printf '#!/bin/bash\n[ "$2" = view ] && echo %s\n[ "$2" = checks ] && echo %q\nexit 0\n' "$1" "$2" >"$F/gh"; chmod +x "$F/gh"; }
fake MERGEABLE '[{"bucket":"pass","name":"A"},{"bucket":"pending","name":"E2E"}]'
check 2 'gh pr merge 9 --merge' "$PWD/$F:$PATH"
fake MERGEABLE '[{"bucket":"pass","name":"A"},{"bucket":"fail","name":"CodeQL"}]'
check 2 'gh pr merge 9 --merge' "$PWD/$F:$PATH"
fake CONFLICTING '[]'
check 2 'gh pr merge 9 --merge' "$PWD/$F:$PATH"
fake MERGEABLE '[]'
check 2 'gh pr merge 9 --merge' "$PWD/$F:$PATH"
fake MERGEABLE '[{"bucket":"pass","name":"A"},{"bucket":"skipping","name":"B"}]'
check 0 'gh pr merge 9 --merge' "$PWD/$F:$PATH"
rm -rf "$F"

[ "$fail" = 0 ] && echo "all guard cases pass" || { echo "GUARD CASES FAILED"; exit 1; }
