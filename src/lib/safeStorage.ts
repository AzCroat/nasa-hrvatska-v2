// src/lib/safeStorage.ts
//
// localStorage access can throw a `SecurityError` (not just return null) in
// several real browser configurations:
//   - cookies / site-data blocked for the origin ("Block all cookies")
//   - supervised / managed profiles (e.g. Google Family Link child accounts)
//   - some privacy modes and embedded webviews
//
// An UNGUARDED `localStorage.getItem/setItem` on the app-startup path therefore
// crashes the app before React can mount — a permanent BLANK screen with no
// error UI, disproportionately hitting locked-down / child profiles while a
// normal profile loads fine. These helpers swallow the failure so a
// storage-restricted profile degrades to in-memory defaults instead of a
// white-screen. Use them for any storage access that runs during boot / first
// render. (Elsewhere the codebase already wraps this pattern inline, e.g.
// App.tsx's `onboarded` initializer — this centralises it.)

export function lsGet(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function lsSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (blocked / restricted profile) — non-fatal */
  }
}

export function lsRemove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    /* storage unavailable (blocked / restricted profile) — non-fatal */
  }
}
