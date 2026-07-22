// Native (Capacitor) daily reminder notifications.
//
// The web reminder path (pushNotifications.ts / useNotifications.ts) uses the
// browser Notification API on a setTimeout — a no-op inside the Android
// WebView, and it can't fire once the app is closed anyway. On native we use
// @capacitor/local-notifications, which schedules an OS-level notification that
// fires at the chosen hour even when the app is fully closed. No server, no FCM.
//
// Every export is a no-op on web (guarded by isNative()) and never throws — a
// failure to schedule must never break the settings flow.
//
// NOTE: delivery can only be verified on a physical device / emulator; CI does
// not build or run the native app. Confirm firing during closed testing.

import { isNative } from './platform';

// Stable id so re-scheduling REPLACES the existing reminder instead of stacking.
const DAILY_REMINDER_ID = 1001;

type LocalNotificationsPlugin = {
  checkPermissions: () => Promise<{ display: string }>;
  requestPermissions: () => Promise<{ display: string }>;
  schedule: (opts: { notifications: unknown[] }) => Promise<unknown>;
  cancel: (opts: { notifications: { id: number }[] }) => Promise<void>;
};

async function _plugin(): Promise<LocalNotificationsPlugin | null> {
  if (!isNative()) return null;
  try {
    // Dynamic import keeps the plugin out of the web bundle's main chunk.
    const mod = (await import('@capacitor/local-notifications')) as unknown as {
      LocalNotifications?: LocalNotificationsPlugin;
    };
    return mod.LocalNotifications ?? null;
  } catch {
    return null;
  }
}

/** Read the user's preferred reminder time ("HH:MM", default 20:00) → {hour,minute}. */
function reminderClock(): { hour: number; minute: number } {
  let hour = 20;
  let minute = 0;
  try {
    const pref = localStorage.getItem('nh_reminder_time') || '20:00';
    const [h, m] = pref.split(':');
    const ph = parseInt(h ?? '20', 10);
    const pm = parseInt(m ?? '0', 10);
    if (Number.isFinite(ph) && ph >= 0 && ph <= 23) hour = ph;
    if (Number.isFinite(pm) && pm >= 0 && pm <= 59) minute = pm;
  } catch {
    /* defaults */
  }
  return { hour, minute };
}

/** A short, streak-aware reminder message (kept self-contained — no heavy deps). */
function reminderMessage(streakDays: number): { title: string; body: string } {
  let firstName = '';
  try {
    const profile = JSON.parse(localStorage.getItem('nh_profile') || '{}') as {
      name?: string;
      displayName?: string;
    };
    firstName = (profile.name || profile.displayName || '').split(' ')[0]?.trim() || '';
  } catch {
    /* no name */
  }
  const tag = firstName ? `, ${firstName}` : '';
  if (streakDays >= 3) {
    return {
      title: `🔥 ${streakDays}-day streak${tag}!`,
      body: `Keep it alive — just 5 minutes of Croatian today.`,
    };
  }
  return {
    title: `🇭🇷 Croatian time${tag}`,
    body: `Vježbaj danas! A few minutes keeps your progress moving.`,
  };
}

/**
 * Non-prompting permission check on native — for driving the settings UI on
 * mount without triggering a system prompt. Returns 'granted' | 'denied' |
 * 'prompt', or 'unsupported' on web / when the plugin is unavailable.
 */
export async function getNativeNotificationPermission(): Promise<string> {
  const plugin = await _plugin();
  if (!plugin) return 'unsupported';
  try {
    const cur = await plugin.checkPermissions();
    return cur.display || 'prompt';
  } catch {
    return 'unsupported';
  }
}

/** Request the OS notification permission on native. Returns true if granted. */
export async function requestNativeNotificationPermission(): Promise<boolean> {
  const plugin = await _plugin();
  if (!plugin) return false;
  try {
    const cur = await plugin.checkPermissions();
    if (cur.display === 'granted') return true;
    const res = await plugin.requestPermissions();
    return res.display === 'granted';
  } catch {
    return false;
  }
}

/**
 * Schedule (or reschedule) the daily reminder on native at the user's chosen
 * hour. Uses a recurring `on: {hour, minute}` schedule so it repeats every day
 * even while the app is closed. Safe to call repeatedly — the fixed id replaces
 * any prior schedule. No-op on web or if permission is not granted.
 */
export async function scheduleNativeDailyReminder(streakDays = 0): Promise<void> {
  const plugin = await _plugin();
  if (!plugin) return;
  try {
    const cur = await plugin.checkPermissions();
    if (cur.display !== 'granted') return;
    const { hour, minute } = reminderClock();
    const { title, body } = reminderMessage(streakDays);
    // Replace any existing reminder first, then schedule the recurring one.
    await plugin.cancel({ notifications: [{ id: DAILY_REMINDER_ID }] });
    await plugin.schedule({
      notifications: [
        {
          id: DAILY_REMINDER_ID,
          title,
          body,
          schedule: { on: { hour, minute }, allowWhileIdle: true },
        },
      ],
    });
  } catch {
    /* scheduling is best-effort — never break the caller */
  }
}

/** Cancel the daily reminder on native (e.g. when the user disables reminders). */
export async function cancelNativeDailyReminder(): Promise<void> {
  const plugin = await _plugin();
  if (!plugin) return;
  try {
    await plugin.cancel({ notifications: [{ id: DAILY_REMINDER_ID }] });
  } catch {
    /* nothing scheduled */
  }
}
