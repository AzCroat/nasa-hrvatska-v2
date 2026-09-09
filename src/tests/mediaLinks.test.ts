/**
 * mediaLinks.test.ts — the media page must not send learners to somebody
 * else's Croatian lessons.
 *
 * Field report, 2026-09-09: "Remove Jezik i Komunikacija on the media page. It
 * directs users to another learning service." It did, and it was not alone —
 * three of the forty entries pointed at third-party Croatian INSTRUCTION:
 *
 *   Jezik i Komunikacija      "Croatian language tips & explanations"
 *   Croatian Learning — YouTube  "Croatian language tutorials & lessons", whose
 *                             tip told the learner to "use YouTube to see
 *                             grammar explained visually when a concept isn't
 *                             clicking" — this app handing its own teaching job
 *                             to a search results page
 *   Slow Croatian Podcast     "Slow, clear Croatian speech for learners"
 *
 * CLAUDE.md's rule is categorical and names Duolingo, Babbel, iTalki, Preply
 * and Lingopie — "or any similar service. Implement features natively
 * instead." A YouTube search for `learn+croatian+language+lessons` is that
 * rule's subject even though no brand appears in it, which is exactly why a
 * brand-name blocklist alone would not have caught any of the three.
 *
 * THE SCOPE IS THE OFFER, NOT THE TIP, and that distinction is load-bearing.
 * `name`, `desc` and `web` are what the card points AT; `tip` is Naša Hrvatska
 * speaking in its own voice about how to use Croatian media. Tportal's tip
 * says tech articles make it "easier to learn Croatian tech vocabulary" —
 * measured as the single false positive when the patterns were dry-run over
 * `tip` as well, and it is legitimate pedagogy, not a referral. Competitor
 * NAMES stay banned in every field including the tip: there is no context in
 * which this app recommends one by name.
 */
import { describe, it, expect } from 'vitest';
import { MEDIA, POPCULTURE } from '../data/cultural/media.js';

type MediaEntry = { name: string; desc?: string; tip?: string; web?: string; cat?: string };
const entries = MEDIA as MediaEntry[];

/** Signals that an entry's OFFER is third-party language instruction. */
const INSTRUCTION: RegExp[] = [
  /learn\+?\s*croatian/i,
  /croatian\+?\s*(language\+?\s*)?lessons?/i,
  /language\+?\s*lessons?/i,
  /for\+?\s*learners/i,
  /gramatika\+?\s*objasnjenje/i,
  /language tips/i,
  /tutorials?\b/i,
];

/** Named in CLAUDE.md, plus the obvious siblings. Banned in every field. */
const COMPETITORS = /\b(duolingo|babbel|italki|preply|lingopie|memrise|busuu|rosetta\s*stone)\b/i;

const offerOf = (m: MediaEntry) => [m.name, m.desc, m.web].filter(Boolean).join(' | ');
const allOf = (m: MediaEntry) => [m.name, m.desc, m.tip, m.web].filter(Boolean).join(' | ');

describe('the media page never points at another learning service', () => {
  it('carries no YouTube link at all', () => {
    // THE PATTERN GUARD ABOVE WAS NOT ENOUGH, and finding that out is the
    // reason this assertion exists. `Easy Croatian` — a competing Croatian-
    // teaching channel, linked at youtube.com/c/EasyCroatian — sailed through
    // it, because its offer reads "Street interviews with subtitles" and
    // matches none of the instruction patterns. A guard written to catch three
    // known entries caught exactly those three.
    //
    // This is the mechanical rule, and it needs no judgement about what a
    // channel teaches: the media page links to Croatian broadcasters, papers
    // and clubs, never to YouTube. The six entries that embed a specific
    // vetted video still do (MediaTab.openItem checks `ytId` before `web`, so
    // they never needed the link) — what is banned is sending the learner OUT
    // to a page this app cannot vouch for. A `?search_query=` URL is the worst
    // case: the app lints every Croatian string it ships and refuses to put a
    // Serbian form in front of a learner even as a distractor, then handed
    // them an algorithmic results page.
    const bad = entries
      .filter((m) => /youtube\.com|youtu\.be/i.test(m.web || ''))
      .map((m) => `${m.name} -> ${m.web}`);
    expect(bad, `media entries linking to YouTube:\n  ${bad.join('\n  ')}`).toEqual([]);
  });

  it('no entry OFFERS third-party Croatian instruction', () => {
    const bad = entries
      .map((m) => ({ m, hit: INSTRUCTION.find((re) => re.test(offerOf(m))) }))
      .filter((x) => x.hit)
      .map((x) => `${x.m.name} — matched ${x.hit} in "${offerOf(x.m)}"`);
    expect(
      bad,
      `media entries pointing at somebody else's Croatian lessons:\n  ${bad.join('\n  ')}`,
    ).toEqual([]);
  });

  it('names no competing language app, in any field', () => {
    const bad = entries.filter((m) => COMPETITORS.test(allOf(m))).map((m) => m.name);
    expect(bad, `media entries naming a competitor: ${bad.join(', ')}`).toEqual([]);
  });

  it('the three removed entries would each be caught if restored', () => {
    // The guard has to catch the ACTUAL entries that were on the page, not a
    // convenient paraphrase of them — these are copied verbatim from the diff.
    const removed: MediaEntry[] = [
      {
        name: 'Jezik i Komunikacija',
        desc: 'Croatian language tips & explanations',
        web: 'https://www.youtube.com/results?search_query=hrvatska+gramatika+objasnjenje+youtube',
      },
      {
        name: 'Croatian Learning — YouTube',
        desc: 'Croatian language tutorials & lessons',
        web: 'https://www.youtube.com/results?search_query=learn+croatian+language+lessons+youtube',
      },
      {
        name: 'Slow Croatian Podcast',
        desc: 'Slow, clear Croatian speech for learners',
        web: 'https://www.youtube.com/results?search_query=slow+croatian+podcast+for+learners',
      },
    ];
    for (const m of removed) {
      expect(
        INSTRUCTION.some((re) => re.test(offerOf(m))),
        `${m.name} could be re-added without failing this suite`,
      ).toBe(true);
    }
  });

  it('POPCULTURE is a different shape — never strip its `web`', () => {
    // Scoped separately BECAUSE the first attempt at this cleanup ran a regex
    // over the whole file and stripped eight URLs out of POPCULTURE too.
    // MediaTab falls back to an embed when `web` is gone; PopCultureScreen
    // opens `p.web` directly and never reads `ytId`, so the same edit there
    // turns all ten buttons into `window.open(undefined)`. Whether that screen
    // should keep its YouTube links is an open question for the owner — this
    // only pins that it must not be half-emptied by accident.
    expect(POPCULTURE.length).toBeGreaterThanOrEqual(10);
    const dead = (POPCULTURE as MediaEntry[]).filter((p) => !p.web).map((p) => p.name);
    expect(dead, `PopCultureScreen entries with no destination: ${dead.join(', ')}`).toEqual([]);
  });

  it('still has a media page — the guard must not pass by emptying it', () => {
    // A rule that is satisfied by deleting all the content is not a rule.
    expect(entries.length).toBeGreaterThanOrEqual(30);
    // The real category set, read from the data rather than guessed — the
    // first draft of this line asserted a `news` category that has never
    // existed, and the test caught me.
    for (const cat of ['tv', 'music', 'film', 'sport', 'podcast', 'culture']) {
      expect(
        entries.some((m) => m.cat === cat),
        `the ${cat} category lost every entry`,
      ).toBe(true);
    }
  });
});
