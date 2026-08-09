import { normalizePersonaKey } from '../../lib/personaKey';
// Persona config, memory helpers, and utility functions for MajaScreen

import { isSpeechRecognitionSupported } from '../../lib/platform.js';

// ── Keyframe CSS (injected once) ──────────────────────────────────────────────
export const MAJA_STYLES = `
@keyframes maja-pulse {
  0%   { transform: scale(1);   opacity: 0.65; }
  100% { transform: scale(2.3); opacity: 0;    }
}
@keyframes maja-dot {
  0%, 60%, 100% { transform: translateY(0);    opacity: 1;   }
  30%           { transform: translateY(-8px); opacity: 0.6; }
}
@keyframes maja-float {
  0%, 100% { transform: translateY(0px);  }
  50%      { transform: translateY(-4px); }
}
@keyframes maja-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
@keyframes debrief-pop {
  0%   { transform: scale(0.8);  opacity: 0; }
  80%  { transform: scale(1.03);             }
  100% { transform: scale(1);    opacity: 1; }
}
@keyframes maja-ellipsis {
  0%  { content: '.';   }
  33% { content: '..';  }
  66% { content: '...'; }
}
@keyframes maja-confetti-fall {
  0%   { transform: translateY(-20px) rotate(0deg);   opacity: 1; }
  100% { transform: translateY(80px)  rotate(360deg); opacity: 0; }
}
@keyframes maja-bar-pulse {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1;   }
}
@keyframes maja-cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
`;

// ── Persona configuration ─────────────────────────────────────────────────────
export const PERSONA_CONFIG = {
  teacher: {
    name: 'Maja Kovačević',
    title: 'Učiteljica Hrvatskog',
    avatar: '/images/portraits/tutor-hero.webp',
    fallbackEmoji: '👩‍🏫',
    orbColor: '#D4002D',
    thinkingColor: '#F59E0B',
    speakingColor: '#D4002D',
    listenColor: '#0e7490',
    accentColor: '#D4002D',
  },
  fisherman: {
    name: 'Marko',
    title: 'Ribar, Stari Grad, Hvar',
    avatar: '/images/portraits/fisherman.webp',
    fallbackEmoji: '⛵',
    orbColor: '#0284c7',
    thinkingColor: '#0369a1',
    speakingColor: '#0284c7',
    listenColor: '#0ea5e9',
    accentColor: '#0284c7',
  },
  secretary: {
    name: 'Ana Perković',
    title: 'Tajnica, Grad Zagreb',
    avatar: '/images/portraits/mature-woman.webp',
    fallbackEmoji: '💼',
    orbColor: '#7c3aed',
    thinkingColor: '#6d28d9',
    speakingColor: '#7c3aed',
    listenColor: '#8b5cf6',
    accentColor: '#7c3aed',
  },
  baka: {
    name: 'Baka Mara',
    title: 'Baka iz Vinkovaca, Slavonija',
    avatar: '/images/portraits/grandmother.webp',
    fallbackEmoji: '👵',
    orbColor: '#b45309',
    thinkingColor: '#92400e',
    speakingColor: '#b45309',
    listenColor: '#d97706',
    accentColor: '#b45309',
  },
  cabbie: {
    name: 'Ivo',
    title: 'Taksist, Split',
    avatar: '/images/portraits/ivo.webp',
    fallbackEmoji: '🚕',
    orbColor: '#2563eb',
    thinkingColor: '#1d4ed8',
    speakingColor: '#2563eb',
    listenColor: '#3b82f6',
    accentColor: '#2563eb',
  },
};

export function getPersona() {
  try {
    // Storage holds either the raw key ('cabbie', written by PersonaScreen and
    // partners.ts) or the legacy JSON-encoded form ('"cabbie"', written by
    // applyRemoteProgress). Looking the quoted form up in PERSONA_CONFIG missed,
    // so anyone whose persona arrived via sync silently got Maja instead of the
    // partner they picked. normalizePersonaKey accepts both.
    const p = normalizePersonaKey(localStorage.getItem('maja_persona'));
    return p && PERSONA_CONFIG[p] ? p : 'teacher';
  } catch {
    return 'teacher';
  }
}

// ── Constants ─────────────────────────────────────────────────────────────────
// Single source of truth for Web Speech availability. isSpeechRecognitionSupported()
// excludes browsers with a broken stub (DuckDuckGo) so razgovor voice falls back
// to the MediaRecorder→Whisper path there instead of a dead SpeechRecognition.
export const SR_SUPPORTED = isSpeechRecognitionSupported();

export const DEFAULT_MEMORY = {
  sessionCount: 0,
  relationshipLevel: 0,
  totalMinutes: 0,
  knownFacts: {},
  mistakePatterns: [],
  lastSessionSummary: '',
  nextTopicSuggestion: '',
  recentVocab: [],
  sessions: [],
};

// ── Adaptive endpointing ──────────────────────────────────────────────────────
// A flat 2 s "have you stopped talking?" timer cut learners off mid-thought
// (halting heritage speech pauses to recall a word) and added a full 2 s of dead
// air to every turn. Instead, end the turn quickly (BASE) once the utterance
// looks complete, but wait longer (EXTENDED) when it clearly isn't — the speaker
// just started, or trailed off on a conjunction/filler that promises more.
//
// 2026-08 speech-cutoff fix: BASE was 900 ms — shorter than a normal thinking
// pause for an L2 learner, and the timer is re-armed by INTERIM RESULTS, not by
// acoustic energy. Chrome's recognizer routinely stalls interims >900 ms during
// continuous speech, so the timer could fire while the user was audibly still
// talking. 1500/2600 absorbs both the human pause and the recognizer stall;
// the flush-on-stop fix in MajaScreen means even a mistimed fire no longer
// LOSES words. Do not lower these without re-testing against halting speech.
export const SILENCE_BASE_MS = 1500;
export const SILENCE_EXTENDED_MS = 2600;

// High-frequency Croatian connectors + hesitation fillers. If the utterance ends
// on one of these, the speaker is mid-thought — give them more time.
const MID_THOUGHT_TOKENS = new Set([
  // coordinating / subordinating conjunctions
  'i',
  'pa',
  'te',
  'ni',
  'a',
  'ali',
  'nego',
  'no',
  'ili',
  'jer',
  'da',
  'kad',
  'kada',
  'dok',
  'ako',
  'iako',
  'jel',
  'zato',
  'dakle',
  'onda',
  'međutim',
  'te',
  // hesitation fillers
  'ovaj',
  'znači',
  'znaci',
  'mislim',
  'kao',
  'pa',
  'hm',
  'hmm',
  'eee',
  'ovaj',
]);

/**
 * How long to wait after the last recognized speech before treating the turn as
 * finished. Pure + dependency-free so it can be unit-tested.
 * @param {string} transcript current recognized transcript for the turn
 * @returns {number} milliseconds of trailing silence to require
 */
export function computeSilenceDelay(transcript) {
  const t = (transcript || '').trim();
  if (!t) return SILENCE_EXTENDED_MS; // nothing yet — don't fire on noise
  const words = t.split(/\s+/);
  if (words.length < 2) return SILENCE_EXTENDED_MS; // barely started — let them go on
  if (/[,]$/.test(t)) return SILENCE_EXTENDED_MS; // trailing comma = list/clause continues
  const last = words[words.length - 1].toLowerCase().replace(/[.,!?…]+$/, '');
  if (MID_THOUGHT_TOKENS.has(last)) return SILENCE_EXTENDED_MS;
  return SILENCE_BASE_MS;
}

/**
 * Maja's reply streams from the API as a JSON envelope ({"reply":"…","emotion":…}).
 * Rendering the raw accumulating buffer made users watch literal JSON type into
 * the chat bubble before it snapped to clean text. This pulls the (possibly
 * partial) value of the `reply` field out of the streaming buffer so the bubble
 * shows Maja's words as they arrive — never the envelope. Tolerant of a partial
 * string whose closing quote / escape hasn't streamed in yet.
 * @param {string} buffer accumulated SSE text so far
 * @returns {string} the reply text to display right now
 */
export function extractStreamingReply(buffer) {
  if (!buffer) return '';
  const m = /"reply"\s*:\s*"/.exec(buffer);
  if (!m) {
    // No reply field yet. If the stream doesn't look like a JSON envelope, treat
    // it as a plain-text reply and show it; if it does, wait (avoid a JSON flash).
    const head = buffer.replace(/^\s+/, '');
    if (head.startsWith('{') || head.startsWith('```')) return '';
    return buffer;
  }
  let out = '';
  for (let i = m.index + m[0].length; i < buffer.length; i++) {
    const c = buffer[i];
    if (c === '\\') {
      const n = buffer[i + 1];
      if (n === undefined) break; // escape split across chunks — stop cleanly
      out += n === 'n' ? '\n' : n === 't' ? '\t' : n === 'r' ? '' : n;
      i++;
    } else if (c === '"') {
      break; // closing quote — reply value complete
    } else {
      out += c;
    }
  }
  return out;
}

/**
 * Incrementally split a growing reply into complete sentences for streaming TTS,
 * so Maja can start speaking sentence 1 while the model is still writing the rest
 * (collapsing the multi-second "wait for the whole reply" gap).
 *
 * During streaming (final=false) it only emits a sentence whose terminal
 * punctuation is followed by whitespace — proof the sentence is finished and not
 * merely the current end of the buffer. At the final flush (final=true) it also
 * emits the trailing fragment. Ordinals/decimals ("3.", "3.14") are not treated
 * as sentence ends. Returns the advanced cursor so the caller resumes cleanly.
 *
 * @param {string} text full reply text accumulated so far
 * @param {number} cursor how many chars have already been emitted
 * @param {boolean} final if true, flush the trailing fragment too
 * @returns {{ sentences: string[], cursor: number }}
 */
export function extractSentences(text, cursor = 0, final = false) {
  const rest = (text || '').slice(cursor);
  const sentences = [];
  let lastEnd = 0;
  const re = /[.!?…]+["'”’)\]]*\s+/g;
  let m;
  while ((m = re.exec(rest)) !== null) {
    // Skip a lone period right after a digit (ordinal "3." / decimal "3.14").
    if (m[0][0] === '.' && /\d/.test(rest[m.index - 1] || '')) continue;
    const end = m.index + m[0].length;
    const s = rest.slice(lastEnd, end).trim();
    if (s) sentences.push(s);
    lastEnd = end;
  }
  if (final) {
    const tail = rest.slice(lastEnd).trim();
    if (tail) {
      sentences.push(tail);
      lastEnd = rest.length;
    }
  }
  return { sentences, cursor: cursor + lastEnd };
}

// ── Memory persistence ────────────────────────────────────────────────────────
export function loadMemory() {
  try {
    const raw = localStorage.getItem('majaMemory');
    if (!raw) return { ...DEFAULT_MEMORY };
    return { ...DEFAULT_MEMORY, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_MEMORY };
  }
}

export function saveMemory(mem) {
  try {
    localStorage.setItem('majaMemory', JSON.stringify(mem));
  } catch {
    // quota exceeded — silently ignore
  }
}

// ── Formatting helpers ────────────────────────────────────────────────────────
export function fmtDuration(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m} min ${s} sec`;
}

export function fmtElapsed(secs) {
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

export function relationshipLabel(level) {
  const labels = ['stranac', 'poznanik', 'redoviti polaznik', 'prijatelj', 'bliski prijatelj'];
  return labels[Math.min(level, 4)] || 'stranac';
}

export function computeRelationshipLevel(sessionCount) {
  if (sessionCount >= 20) return 4;
  if (sessionCount >= 10) return 3;
  if (sessionCount >= 5) return 2;
  if (sessionCount >= 2) return 1;
  return 0;
}
