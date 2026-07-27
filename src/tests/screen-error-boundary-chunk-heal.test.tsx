/**
 * screen-error-boundary-chunk-heal.test.tsx — Sentry follow-up (2026-07-18):
 * "Failed to fetch dynamically imported module: .../CityOfDayScreen-*.js".
 *
 * A React.lazy screen chunk that 404s after a deploy rejects inside React's
 * lazy machinery and lands in ScreenErrorBoundary — window.onunhandledrejection
 * (where the global stale-chunk healer lives) never fires. The boundary must
 * route chunk-load errors into reloadWithCachePurge itself; other crashes keep
 * the normal fallback card.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

vi.mock('../lib/chunkErrors', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, reloadWithCachePurge: vi.fn(() => true) };
});
vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

import ScreenErrorBoundary from '../components/shared/ScreenErrorBoundary';
import { reloadWithCachePurge } from '../lib/chunkErrors';
import { reportBoundaryError } from '../lib/errorReporter';

const mockReload = vi.mocked(reloadWithCachePurge);

function Bomb({ message }: { message: string }): React.ReactElement {
  throw new TypeError(message);
}

beforeEach(() => {
  vi.clearAllMocks();
  mockReload.mockReturnValue(true);
  // React logs caught boundary errors to console.error — keep test output clean.
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

describe('ScreenErrorBoundary — stale-chunk self-heal', () => {
  it('routes a failed lazy-chunk error into reloadWithCachePurge (and still reports)', () => {
    render(
      <ScreenErrorBoundary name="cityofday">
        <Bomb message="Failed to fetch dynamically imported module: https://nasahrvatska.com/assets/CityOfDayScreen-CMu7ASOy.js" />
      </ScreenErrorBoundary>,
    );
    expect(mockReload).toHaveBeenCalledWith('nh_reload_attempt');
    expect(reportBoundaryError).toHaveBeenCalled();
  });

  it('does NOT reload for an ordinary render crash — fallback card shows instead', () => {
    render(
      <ScreenErrorBoundary name="home">
        <Bomb message="Cannot read properties of undefined (reading 'map')" />
      </ScreenErrorBoundary>,
    );
    expect(mockReload).not.toHaveBeenCalled();
    expect(screen.getByTestId('screen-error-boundary')).toBeTruthy();
    expect(reportBoundaryError).toHaveBeenCalled();
  });

  it('shows the fallback card when the reload budget is already spent', () => {
    mockReload.mockReturnValue(false); // 2 reloads burned this session
    render(
      <ScreenErrorBoundary name="cityofday">
        <Bomb message="error loading dynamically imported module" />
      </ScreenErrorBoundary>,
    );
    expect(mockReload).toHaveBeenCalledWith('nh_reload_attempt');
    expect(screen.getByTestId('screen-error-boundary')).toBeTruthy();
  });
});
