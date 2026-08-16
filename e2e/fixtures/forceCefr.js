// e2e/fixtures/forceCefr.js
// SP10: forces the user's computed CEFR level by stamping uP_<email>.st
// with values that produce the desired band, and removes nh_daily_session
// so the session rebuilds with the forced state.

export const CEFR_XP_TABLE = {
  A1: 0,
  A2: 500,
  B1: 2000,
  B2: 5000,
  C1: 12000,
  C2: 20000,
};

export async function forceCefr(page, cefr, opts = {}) {
  const xp = CEFR_XP_TABLE[cefr];
  if (xp === undefined) {
    throw new Error(`forceCefr: unknown CEFR ${cefr}`);
  }
  await page.addInitScript(
    ({ xp, clearSession }) => {
      try {
        const uS = localStorage.getItem('uS');
        if (!uS) return;
        const parsed = JSON.parse(uS);
        const email = parsed && parsed.u;
        if (!email) return;
        const profileKey = 'uP_' + email;
        const raw = localStorage.getItem(profileKey);
        if (!raw) return;
        const profile = JSON.parse(raw);
        profile.st = { ...(profile.st || {}), xp, lc: 0, gc: 0 };
        localStorage.setItem(profileKey, JSON.stringify(profile));
        if (clearSession) localStorage.removeItem('nh_daily_session');
        // Phase 1 mastery gate: the forced band must also be VERIFIED, or the
        // provisional gate caps content below it and the forced level never
        // takes effect. Real-pass shape (not the grandfather 0.8-signature).
        const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const target = order.indexOf(
          xp < 300 ? 'A1' : xp < 1200 ? 'A2' : xp < 3500 ? 'B1' : xp < 8000 ? 'B2' : xp < 18000 ? 'C1' : 'C2',
        );
        const passes = {};
        for (const lvl of order.slice(1, target + 1)) {
          passes[lvl] = {
            passedAt: Date.now(),
            scores: { vocab: 0.9, grammar: 0.9, reading: 0.9, speaking: 0.9, writing: 0.9 },
            overall: 90,
          };
        }
        localStorage.setItem(
          'nh_cefr_certifications',
          JSON.stringify({ passes, attempts: [], lastFailedAt: {},
            checkpoints: { lastCheckpointAt: null, activeDaysAtLastCheckpoint: 0,
              consecutiveFails: {}, focusSkills: {}, demotions: [], snoozedUntil: null },
            v: 2 }),
        );
        localStorage.setItem('nh_cefr_migration_v1_done', '1');
        localStorage.setItem('nh_cefr_provisional_v1_done', '1');
        localStorage.setItem('nh_cefr_status_shift_v1_done', '1');
      } catch {
        // localStorage absent — silent no-op
      }
    },
    { xp, clearSession: opts.clearSession !== false },
  );
}
