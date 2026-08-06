/**
 * Production smoke test config.
 * Runs a lightweight suite against the live https://nasahrvatska.com
 * to verify the real deployment is healthy. No mocking — real network.
 */
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/smoke.spec.js',
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: [['html', { open: 'never', outputFolder: 'playwright-smoke-report' }], ['list']],
  use: {
    // Target override, so a Cloudflare preview deployment can be smoke-tested
    // BEFORE merge instead of finding out on production. Defaults to production,
    // so the twice-daily scheduled run is unchanged.
    //
    // Every request in smoke.spec.js is relative and resolves against this, which
    // is why the entry-module guard was changed from a hardcoded origin in #410 —
    // otherwise pointing this at a preview would have silently kept testing prod.
    baseURL: process.env.SMOKE_BASE_URL || 'https://nasahrvatska.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    { name: 'Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'WebKit (Safari)', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 14'] } },
  ],
});
