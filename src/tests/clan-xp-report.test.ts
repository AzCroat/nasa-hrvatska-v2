// src/tests/clan-xp-report.test.ts
// The clan server ACCUMULATES weekXP (weekXP += xp), so the client must report
// only the delta since its last report. These tests lock in that guard — the
// whole shared-goal feature was dead before this, and naive cumulative
// reporting would multiply every member's XP on each remount.
import { describe, it, expect, vi, beforeEach } from 'vitest';

const apiFetch = vi.fn();
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: (...a: unknown[]) => apiFetch(...a) }));
// Deterministic ISO week.
vi.mock('../lib/dateUtils', () => ({ weekKey: () => '2026-W30' }));

import { reportClanWeeklyXP } from '../components/home/ClanCard';

function lastXpBody() {
  const call = apiFetch.mock.calls.at(-1)!;
  return JSON.parse((call[1] as { body: string }).body);
}

describe('reportClanWeeklyXP — delta-only, never cumulative', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    apiFetch.mockResolvedValue({ ok: true, json: async () => ({ ok: true, totalXP: 0 }) });
  });

  it('reports the full weekly XP on the first report', async () => {
    localStorage.setItem('nh_week_xp_2026-W30', '120');
    const did = await reportClanWeeklyXP('clan1', 'uid1');
    expect(did).toBe(true);
    expect(lastXpBody()).toMatchObject({ action: 'xp', clanId: 'clan1', uid: 'uid1', xp: 120 });
  });

  it('does NOT report again when no new XP has been earned', async () => {
    localStorage.setItem('nh_week_xp_2026-W30', '120');
    await reportClanWeeklyXP('clan1', 'uid1');
    apiFetch.mockClear();
    const did = await reportClanWeeklyXP('clan1', 'uid1');
    expect(did).toBe(false);
    expect(apiFetch).not.toHaveBeenCalled();
  });

  it('reports only the increment after more XP is earned', async () => {
    localStorage.setItem('nh_week_xp_2026-W30', '120');
    await reportClanWeeklyXP('clan1', 'uid1');
    localStorage.setItem('nh_week_xp_2026-W30', '200'); // earned 80 more
    apiFetch.mockClear();
    const did = await reportClanWeeklyXP('clan1', 'uid1');
    expect(did).toBe(true);
    expect(lastXpBody().xp).toBe(80);
  });

  it('does not persist the report marker if the server call fails', async () => {
    localStorage.setItem('nh_week_xp_2026-W30', '50');
    apiFetch.mockResolvedValueOnce({ ok: false, json: async () => ({}) });
    const did = await reportClanWeeklyXP('clan1', 'uid1');
    expect(did).toBe(false);
    // Next successful attempt still reports the full 50 (marker was not saved).
    apiFetch.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) });
    apiFetch.mockClear();
    await reportClanWeeklyXP('clan1', 'uid1');
    expect(lastXpBody().xp).toBe(50);
  });
});
