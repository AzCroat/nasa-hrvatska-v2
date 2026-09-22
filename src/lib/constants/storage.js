/**
 * All localStorage/sessionStorage keys in one place.
 * Prevents key collisions and makes migrations easier.
 */
export const StorageKeys = {
  // User data (synced to Firebase)
  USER_FAVORITES: 'uFavs',
  USER_JOURNAL: 'uJournal',
  USER_STREAK: 'uStreak',
  USER_FREEZES: 'uFreeze',
  USER_PROGRESS: 'uP_', // + uid suffix
  USER_SRS: 'uSRS',
  USER_FAMILY: 'uFamily',

  // Session
  SESSION: 'uS',
  DARK_MODE: 'darkMode',

  // Daily/weekly state (include date suffix)
  QUEST_PREFIX: 'nh_quest_', // + questId + '_' + YYYY-MM-DD
  WEEK_XP_PREFIX: 'nh_week_xp_', // + YYYY-WNN
  COMEBACK_PREFIX: 'nh_comeback_used_', // + YYYY-MM-DD

  // Ceremonies (one-time flags)
  CEREMONY_STREAK: 'nh_ceremony_streak_', // + milestone number
  CEREMONY_STAGE: 'nh_stage', // + stageNum + '_ceremony'

  // PWA/UX
  PWA_DISMISSED: 'nh_pwa_install_dismissed',
  BACKUP_CONFIRMED: 'fbBackupConfirmed',

  // Gameplay
  XP_COOLDOWN: 'xpCooldown',
  JOURNEY_PREFIX: 'nh_journey_',

  // Level Check audit trail (LOCAL ONLY — deliberately not synced; see
  // src/lib/attemptEvidence.ts)
  CEFR_ATTEMPT_EVIDENCE: 'nh_cefr_attempt_evidence',

  // The learner pressed "Exit placement test". LOCAL ONLY and deliberately
  // NOT `nh_placement_done` / `onboarded`: they did not take the test, and
  // writing either would claim a placement that never happened (NEVER-DO 13).
  // It exists solely to stop App.tsx's 1200 ms auto-offer re-firing — see
  // `placementDeclined.test.tsx`.
  PLACEMENT_DECLINED: 'nh_placement_declined',
};
