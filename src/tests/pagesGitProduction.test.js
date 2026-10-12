// src/tests/pagesGitProduction.test.js
//
// Production publishes come from CI only (2026-10-12, sweep 235). Cloudflare's Git
// connection published master while master CI was red; the deploy now turns that off
// and leaves pull-request previews alone.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { gitProductionPatch } from '../../scripts/pagesGitProduction.mjs';

const gitProject = {
  name: 'nasa-hrvatska-v2',
  source: {
    type: 'github',
    config: {
      owner: 'AzCroat',
      repo_name: 'nasa-hrvatska-v2',
      production_branch: 'master',
      production_deployments_enabled: true,
      preview_deployment_setting: 'all',
      pr_comments_enabled: true,
    },
  },
};

describe('Git production builds are off; previews are untouched', () => {
  it('turns off production builds and keeps every other source setting', () => {
    const patch = gitProductionPatch(gitProject);
    expect(patch.source.config.production_deployments_enabled).toBe(false);
    expect(patch.source.config.preview_deployment_setting).toBe('all');
    expect(patch.source.config.production_branch).toBe('master');
    expect(patch.source.type).toBe('github');
    expect(patch.source.config.repo_name).toBe('nasa-hrvatska-v2');
  });

  it('changes nothing when already off, or when the project is not Git-connected', () => {
    const off = structuredClone(gitProject);
    off.source.config.production_deployments_enabled = false;
    expect(gitProductionPatch(off)).toBeNull();
    expect(gitProductionPatch({ name: 'x' })).toBeNull();
    expect(gitProductionPatch(undefined)).toBeNull();
  });

  it('runs in the deploy setup, before the env-var check, and never fails the deploy', () => {
    const setup = readFileSync('scripts/setup-cf-resources.mjs', 'utf8');
    const at = setup.indexOf('gitProductionPatch(project)');
    expect(at).toBeGreaterThan(0);
    const block = setup.slice(
      setup.lastIndexOf('try {', at),
      setup.indexOf('checkPageEnvVars(project)', at),
    );
    expect(block).toMatch(/catch \(e\)[\s\S]*::warning::/);
    expect(block).not.toMatch(/process\.exit/);
  });
});
