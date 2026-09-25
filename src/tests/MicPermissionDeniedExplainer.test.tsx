/**
 * MicPermissionDeniedExplainer.test.tsx — Pattern X behavioral
 *
 * Verifies the per-OS instruction text and the ONE action, Try Again. The
 * component depends on getMicPermissionPlatform() — mocked so each test case
 * isolates a single platform.
 *
 * TWO TESTS HERE USED TO COVER A BRANCH NO CONSUMER COULD REACH (2026-09-25).
 * An optional `onUseWriting` rendered a second button; not one of the ten render
 * sites passed it, and one of these tests SUPPLIED IT ITSELF — the
 * `AlphabetScreen.award` shape exactly, where a component test that provides the
 * prop proves the branch works when wired and says nothing about whether it is.
 * The prop is gone; what stands in their place is an assertion that this card
 * offers exactly one action, so a second one cannot return without a consumer.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MicPermissionDeniedExplainer from '../components/shared/MicPermissionDeniedExplainer';

const platformMock = vi.fn();
vi.mock('../lib/platform', () => ({
  getMicPermissionPlatform: () => platformMock(),
}));

describe('MicPermissionDeniedExplainer', () => {
  beforeEach(() => {
    platformMock.mockReset();
  });

  it('renders iOS Safari instructions when platform is ios-safari', () => {
    platformMock.mockReturnValue('ios-safari');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByText(/Settings.*Safari.*Microphone/i)).toBeInTheDocument();
  });

  it('renders iOS app instructions when platform is ios-app', () => {
    platformMock.mockReturnValue('ios-app');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByText(/Settings.*Na.a Hrvatska.*Microphone/i)).toBeInTheDocument();
  });

  it('renders Android Chrome instructions when platform is android-browser', () => {
    platformMock.mockReturnValue('android-browser');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByText(/lock icon.*Permissions.*Microphone/i)).toBeInTheDocument();
  });

  it('renders Android app instructions when platform is android-app', () => {
    platformMock.mockReturnValue('android-app');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByText(/Apps.*Na.a Hrvatska.*Permissions/i)).toBeInTheDocument();
  });

  it('renders desktop fallback when platform is desktop', () => {
    platformMock.mockReturnValue('desktop');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByText(/lock.*re-enable Microphone/i)).toBeInTheDocument();
  });

  it('"Microphone access is blocked" header is always present', () => {
    platformMock.mockReturnValue('desktop');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByText(/Microphone access is blocked/i)).toBeInTheDocument();
  });

  it('"Try Again" button is rendered and calls onRetry', () => {
    platformMock.mockReturnValue('desktop');
    const onRetry = vi.fn();
    render(<MicPermissionDeniedExplainer onRetry={onRetry} />);
    fireEvent.click(screen.getByText(/Try Again/));
    expect(onRetry).toHaveBeenCalled();
  });

  it('offers exactly ONE action — the card is not a router to anywhere else', () => {
    platformMock.mockReturnValue('desktop');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(
      buttons.map((b) => b.textContent),
      'a second action here is only honest if a consumer passes it — the removed ' +
        '"Use writing instead" never had one, and each consumer that has a writing ' +
        'analog renders it itself beside this card',
    ).toEqual(['Try Again']);
  });

  it('role=alert is present for screen readers', () => {
    platformMock.mockReturnValue('desktop');
    render(<MicPermissionDeniedExplainer onRetry={() => {}} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
