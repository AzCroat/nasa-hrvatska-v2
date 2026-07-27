// src/tests/nativeNotifications.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Control isNative() per-test.
vi.mock('../lib/platform', () => ({ isNative: vi.fn() }));

// Mock the Capacitor plugin the module dynamically imports.
const schedule = vi.fn(async () => undefined);
const cancel = vi.fn(async () => undefined);
const checkPermissions = vi.fn(async () => ({ display: 'granted' }));
const requestPermissions = vi.fn(async () => ({ display: 'granted' }));
vi.mock('@capacitor/local-notifications', () => ({
  LocalNotifications: { schedule, cancel, checkPermissions, requestPermissions },
}));

import { isNative } from '../lib/platform';
import {
  scheduleNativeDailyReminder,
  cancelNativeDailyReminder,
  requestNativeNotificationPermission,
} from '../lib/nativeNotifications';

describe('nativeNotifications', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    checkPermissions.mockResolvedValue({ display: 'granted' });
    requestPermissions.mockResolvedValue({ display: 'granted' });
  });

  it('is a no-op on web (does not touch the plugin)', async () => {
    (isNative as unknown as ReturnType<typeof vi.fn>).mockReturnValue(false);
    await scheduleNativeDailyReminder(5);
    await cancelNativeDailyReminder();
    expect(schedule).not.toHaveBeenCalled();
    expect(cancel).not.toHaveBeenCalled();
  });

  it('schedules a recurring daily reminder at the stored hour on native', async () => {
    (isNative as unknown as ReturnType<typeof vi.fn>).mockReturnValue(true);
    localStorage.setItem('nh_reminder_time', '08:30');
    await scheduleNativeDailyReminder(4);

    // Cancels the prior schedule first, then schedules the recurring one.
    expect(cancel).toHaveBeenCalledTimes(1);
    expect(schedule).toHaveBeenCalledTimes(1);
    const arg = schedule.mock.calls[0][0] as {
      notifications: { id: number; schedule: { on: { hour: number; minute: number } } }[];
    };
    const n = arg.notifications[0];
    expect(n.schedule.on).toEqual({ hour: 8, minute: 30 });
    // Stable id so re-scheduling replaces rather than stacks.
    expect(typeof n.id).toBe('number');
  });

  it('does NOT schedule when OS permission is not granted', async () => {
    (isNative as unknown as ReturnType<typeof vi.fn>).mockReturnValue(true);
    checkPermissions.mockResolvedValue({ display: 'denied' });
    await scheduleNativeDailyReminder(0);
    expect(schedule).not.toHaveBeenCalled();
  });

  it('requestNativeNotificationPermission returns true only when granted', async () => {
    (isNative as unknown as ReturnType<typeof vi.fn>).mockReturnValue(true);
    checkPermissions.mockResolvedValue({ display: 'prompt' });
    requestPermissions.mockResolvedValue({ display: 'granted' });
    await expect(requestNativeNotificationPermission()).resolves.toBe(true);

    requestPermissions.mockResolvedValue({ display: 'denied' });
    await expect(requestNativeNotificationPermission()).resolves.toBe(false);
  });
});
