// Cloudflare Pages: production publishes come from CI only (2026-10-12, sweep 235).
//
// The Pages project is connected to GitHub, and that connection built and published
// every push to master on its own — without waiting for CI. On 2026-10-12 master CI
// failed (Firefox missing on the test runner) and the commit was live anyway, so the
// rule "a red test blocks a deploy" was not enforced. CI already publishes with
// `wrangler pages deploy` after every gate passes, so Cloudflare's own production
// build is turned off. PREVIEW builds for pull requests are left exactly as they are.

/**
 * The PATCH body that turns off Git-triggered PRODUCTION builds, or null when there is
 * nothing to change: the project is not Git-connected, or the setting is already off.
 * The source object is sent whole — only `production_deployments_enabled` differs.
 */
export function gitProductionPatch(project) {
  const source = project?.source;
  if (!source || !source.config) return null;
  if (source.config.production_deployments_enabled === false) return null;
  return {
    source: {
      ...source,
      config: { ...source.config, production_deployments_enabled: false },
    },
  };
}
