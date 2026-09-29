// functions/api/_sttGoldenSet.js
//
// STT GOLDEN SET (owner directive, 2026-08-19 — assessment gap #7). The
// speaking-score pipeline has two stages: speech-to-text, then the CEFR
// rubric. golden-calibration.js proves the RUBRIC is honest (it feeds known
// transcripts); nothing verified the STT stage in front of it — the
// historically weakest link for Croatian. This set closes that: known
// phrases are synthesized through the app's own production TTS voice and run
// through the REAL production provider chain (_transcribe.js), and the
// word-error rate against the known text must stay inside band.
//
// Phrase design: native-standard Croatian, phonetically diverse on purpose —
// diacritic-dense words (č/ć/š/ž/đ), numbers, the exam-answer register, and
// the palatal clusters (lj/nj) Croatian STT most often fumbles. Clean
// synthetic audio should transcribe near-perfectly; the band is wide because
// it exists to catch GROSS breakage (provider drift, language mis-config,
// format rot), not to pin provider variance.

export const STT_GOLDEN_PHRASES = [
  {
    id: 'stt-greeting',
    text: 'Dobar dan, kako ste danas?',
  },
  {
    id: 'stt-diacritics',
    text: 'Čaša svježega soka i žlica šećera već čekaju na stolu.',
  },
  {
    id: 'stt-numbers',
    text: 'Imam trideset i sedam godina i živim u Zagrebu već pet godina.',
  },
  {
    id: 'stt-palatals',
    text: 'Moja obitelj njeguje ljubav prema knjigama i putovanjima.',
  },
  {
    id: 'stt-exam-register',
    text: 'Prošlog ljeta posjetili smo Dubrovnik i razgledali stare gradske zidine.',
  },
  {
    id: 'stt-question',
    text: 'Možete li mi reći koliko košta karta do Splita?',
  },
];

/**
 * PRONUNCIATION-ASSESSMENT PROBES (2026-09-29). Guided Speaking now trusts Azure's
 * scripted assessment to say whether a learner really said the required case ending
 * (src/lib/spokenCheck, components/practice/AssessedMic + SpeakCheck), and until now no
 * run had ever shown that Azure can. Each probe is one sentence and the same sentence with
 * the wrong ending, both spoken by the production voice, both scored against the CORRECT
 * sentence:
 *   - the control (said correctly) must leave the focus word clear, or the check nags
 *     learners who were right;
 *   - the miscue (said wrong) must flag the focus word, or the check cannot catch the
 *     mistake it exists for.
 * The wrong forms are ordinary learner errors: a nominative where the accusative or
 * locative is required, and an inanimate accusative for an animate noun.
 */
export const ASSESS_PROBES = [
  {
    id: 'assess-accusative',
    reference: 'Imam sestru.',
    wrong: 'Imam sestra.',
    focus: 'sestru',
    wrongFocus: 'sestra',
  },
  {
    id: 'assess-animate',
    reference: 'Vidim prijatelja.',
    wrong: 'Vidim prijatelj.',
    focus: 'prijatelja',
    wrongFocus: 'prijatelj',
  },
  {
    id: 'assess-locative',
    reference: 'Živim u Zagrebu.',
    wrong: 'Živim u Zagreb.',
    focus: 'Zagrebu',
    wrongFocus: 'Zagreb',
  },
  {
    id: 'assess-object',
    reference: 'Pijem kavu s mlijekom.',
    wrong: 'Pijem kava s mlijekom.',
    focus: 'kavu',
    wrongFocus: 'kava',
  },
];

/**
 * Which form of the focus word a transcript carries: 'correct' (the required ending),
 * 'wrong' (the probe's wrong ending), or 'neither' (the word was not heard as either).
 * Words are compared whole, case- and punctuation-insensitive; diacritics count, because
 * in Croatian they change the word.
 */
export function endingHeard(transcript, focus, wrongFocus) {
  const words = String(transcript || '')
    .toLowerCase()
    .replace(/[.,;:!?„“”"'()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  if (words.includes(String(focus).toLowerCase())) return 'correct';
  if (wrongFocus && words.includes(String(wrongFocus).toLowerCase())) return 'wrong';
  return 'neither';
}

/** The app's own threshold for an unclear word (src/lib/spokenCheck UNCLEAR_BELOW). */
export const ASSESS_UNCLEAR_BELOW = 60;

/**
 * Did the assessment flag this word, by the rule the app applies? Missing from the
 * scored words, omitted, mispronounced or scored below the threshold all count; an
 * Insertion is an extra word, not the focus word. Mirrors src/lib/spokenCheck's
 * `checkedWords` (a test holds the two to the same verdicts).
 */
export function assessFocusFlagged(wordScores, focus) {
  const want = String(focus).toLowerCase();
  const w = (Array.isArray(wordScores) ? wordScores : []).find(
    (x) => String(x?.word || '').toLowerCase() === want && x?.error !== 'Insertion',
  );
  if (!w) return true;
  if (w.error === 'Omission' || w.error === 'Mispronunciation') return true;
  // No score is no measurement: judged by the miscue verdict alone, as the client does.
  if (typeof w.score !== 'number') return false;
  return w.score < ASSESS_UNCLEAR_BELOW;
}

/** Max acceptable word-error rate per sample. Synthetic studio-clean audio
 *  through a healthy provider chain lands near 0; a sample above this means
 *  the STT stage broke for real speech too. Widening it is an owner-visible
 *  calibration decision — note it in the PR. */
export const STT_WER_BAND = 0.34;

/** Two or more samples out of band = systematic drift (same rule as the
 *  rubric golden set). */
export const STT_DRIFT_THRESHOLD = 2;

/** Normalize for WER: lowercase, strip punctuation, collapse whitespace.
 *  Diacritics are KEPT — c/č/ć distinctions are exactly what Croatian STT
 *  must get right. */
export function normalizeForWer(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[.,!?;:'"„“”()\-—–…]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Word-error rate: word-level Levenshtein distance / reference length. */
export function wordErrorRate(reference, hypothesis) {
  const ref = normalizeForWer(reference).split(' ').filter(Boolean);
  const hyp = normalizeForWer(hypothesis).split(' ').filter(Boolean);
  if (ref.length === 0) return hyp.length === 0 ? 0 : 1;
  const dp = Array.from({ length: ref.length + 1 }, (_, i) => {
    const row = new Array(hyp.length + 1).fill(0);
    row[0] = i;
    return row;
  });
  for (let j = 0; j <= hyp.length; j++) dp[0][j] = j;
  for (let i = 1; i <= ref.length; i++) {
    for (let j = 1; j <= hyp.length; j++) {
      const sub = ref[i - 1] === hyp[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + sub);
    }
  }
  return dp[ref.length][hyp.length] / ref.length;
}
