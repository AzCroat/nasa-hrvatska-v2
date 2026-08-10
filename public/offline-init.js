// Offline-page behavior — EXTERNAL file on purpose: the site CSP does not
// allow inline scripts (script-src has no 'unsafe-inline'), and the service
// worker serves offline.html with the CSP headers it was cached with, so an
// inline <script> or onclick= there would be silently blocked exactly when
// the user is offline and can least debug it.

// "Try Again" button (was an inline onclick before the CSP hardening)
document.getElementById('retry')?.addEventListener('click', () => {
  window.location.reload();
});

// Auto-retry when connection is restored
window.addEventListener('online', () => {
  document.getElementById('status').textContent = 'Connection restored! Reloading…';
  setTimeout(() => window.location.reload(), 800);
});

// Show current status
if (navigator.onLine) {
  document.getElementById('status').textContent =
    'Connection may have been restored — tap Try Again';
} else {
  document.getElementById('status').textContent =
    'Offline · will reload automatically when reconnected';
}
