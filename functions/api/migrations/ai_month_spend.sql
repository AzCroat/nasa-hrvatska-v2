-- Global monthly AI spend ledger (see _aiBudget.js) — the hard <$5/month cap.
-- One row per month; microusd accumulates each metered call's worst-case cost.
-- Run once via: Cloudflare Dashboard → D1 → AI_QUOTA_DB → Console → Execute
-- (Until run, the code degrades to the KV fallback automatically.)
CREATE TABLE IF NOT EXISTS ai_month_spend (
  month    TEXT    PRIMARY KEY,  -- "2026-08" (UTC)
  microusd INTEGER NOT NULL DEFAULT 0
);
