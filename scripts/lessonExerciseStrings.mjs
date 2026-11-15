// scripts/lessonExerciseStrings.mjs
//
// Every STRING an exercise item or a text slide shows a learner, as
// { loc, field, content, kind } for the Croatian lint (lintCroatianText.mjs walks
// lessons structurally; the regex passes cannot see most of these shapes).
//
// kind 'croatian' = encoding AND Serbism checks (Croatian, or English prose quoting
// it); kind 'gloss' = encoding only (pure English: translations, group names).
// Kept in its own module so a test can plant a Serbism in each field and watch the
// walk yield it — the lint script itself runs on import and cannot be called.

/** The strings of one practice / text-question item, of any kind. */
export function* exerciseStrings(it, where, kind) {
  if (!it || typeof it !== 'object') return;
  const one = (field, content, k = kind, at = field) => ({
    loc: `${where}.${at}`,
    field,
    content,
    kind: k,
  });
  for (const f of ['q', 'hint', 'explanation', 'answer', 'from', 'audio']) {
    if (typeof it[f] === 'string') yield one(f, it[f]);
  }
  for (const list of ['accept', 'options', 'words']) {
    for (const v of Array.isArray(it[list]) ? it[list] : []) {
      if (typeof v === 'string') yield one(list === 'words' ? 'word' : list, v, kind, list);
    }
  }
  // match: [[left, right], …] — both sides are Croatian.
  for (const [k, p] of (Array.isArray(it.pairs) ? it.pairs : []).entries()) {
    for (const [side, v] of (Array.isArray(p) ? p : []).entries()) {
      if (typeof v === 'string') yield one('pair', v, kind, `pairs[${k}][${side}]`);
    }
  }
  // sort: group names are English labels; the items are Croatian.
  for (const [k, g] of (Array.isArray(it.groups) ? it.groups : []).entries()) {
    if (typeof g === 'string') yield one('group', g, 'gloss', `groups[${k}]`);
  }
  for (const [k, x] of (Array.isArray(it.items) ? it.items : []).entries()) {
    if (typeof x?.hr === 'string') yield one('hr', x.hr, kind, `items[${k}].hr`);
  }
}

/** The strings of a `text` slide: title, lines, and its questions. */
export function* textSlideStrings(s, at, kind) {
  if (typeof s?.title === 'string')
    yield { loc: `${at}.title`, field: 'title', content: s.title, kind };
  for (const [i, l] of (Array.isArray(s?.lines) ? s.lines : []).entries()) {
    if (typeof l?.hr === 'string')
      yield { loc: `${at}.lines[${i}].hr`, field: 'hr', content: l.hr, kind };
    if (typeof l?.en === 'string')
      yield { loc: `${at}.lines[${i}].en`, field: 'en', content: l.en, kind: 'gloss' };
    if (typeof l?.who === 'string')
      yield { loc: `${at}.lines[${i}].who`, field: 'who', content: l.who, kind: 'gloss' };
  }
  for (const [i, q] of (Array.isArray(s?.questions) ? s.questions : []).entries()) {
    yield* exerciseStrings(q, `${at}.questions[${i}]`, kind);
  }
}
