-- Global monthly AI spend ledger (see _aiBudget.js) — the hard <$5/month cap.
-- One row per month; microusd accumulates each metered call's worst-case cost.
-- DOCUMENTATION ONLY — nobody runs this by hand. _aiBudget.js self-migrates:
-- the first "no such table" answer from D1 triggers CREATE TABLE IF NOT
-- EXISTS and a retry. (Before the table exists, code degrades to KV.)
CREATE TABLE IF NOT EXISTS ai_month_spend (
  month    TEXT    PRIMARY KEY,  -- "2026-08" (UTC)
  microusd INTEGER NOT NULL DEFAULT 0
);
