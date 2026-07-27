// src/lib/swReload.ts
//
// Decides whether a service-worker lifecycle event should force a page reload.
//
// Extracted from main.tsx because the rule is subtle and was already implemented
// inconsistently: the SW_UPDATED path guarded on `hadControllerAtLoad`, the
// controllerchange path did not, and the difference silently reloaded every
// first-time visitor. A pure predicate can be unit-tested; the listener bodies in
// main.tsx (module side effects, run at import, alongside ReactDOM.render) cannot.
//
// The rule, in one sentence: reload only when a NEW service worker replaced an
// OLD one that was already controlling this page.
//
// Why `hadControllerAtLoad` is the whole game
// -------------------------------------------
// `controllerchange` fires whenever this page's controller changes — including the
// no-controller → controller transition. That transition is guaranteed on a first
// install, because src/sw.js does install → skipWaiting() → activate →
// clients.claim(), and claim() is precisely what moves an uncontrolled page to
// controlled. So "controllerchange fired" does NOT imply "there was an update".
//
// src/sw.js already works hard to avoid reloading first-install tabs: it snapshots
// client IDs *before* claim() and skips any client not in that set when it sends
// SW_UPDATED / calls client.navigate(). But it cannot suppress controllerchange —
// the browser fires that as a direct consequence of claim(). The guard has to live
// on the client side, which is what this module is for.
//
// Genuine updates still reload: those tabs were controlled by the previous worker,
// so hadControllerAtLoad is true.

/** The Firebase Cloud Messaging worker is a separate registration with its own
 *  scope. Its activation is unrelated to an app-bundle update, so a reload would
 *  be pure disruption. */
const FCM_WORKER = 'firebase-messaging-sw';

export interface SwReloadContext {
  /** `!!navigator.serviceWorker.controller` sampled once, at page load. */
  hadControllerAtLoad: boolean;
  /** `navigator.serviceWorker.controller?.scriptURL` at event time. */
  controllerScriptURL?: string | null;
}

/**
 * True when a `controllerchange` event represents a genuine app update that the
 * page must reload to pick up.
 */
export function shouldReloadOnControllerChange(ctx: SwReloadContext): boolean {
  if (ctx.controllerScriptURL?.includes(FCM_WORKER)) return false;
  return ctx.hadControllerAtLoad;
}

/**
 * True when an `SW_UPDATED` message from the worker should trigger a reload.
 * Same rule — a first-install worker has no old bundle to replace.
 */
export function shouldReloadOnSwUpdatedMessage(ctx: { hadControllerAtLoad: boolean }): boolean {
  return ctx.hadControllerAtLoad;
}
