// Cloudflare Pages Function — Croatian Radio Stream Proxy with failover.
//
// The player follows a 302 so the browser connects directly to the upstream
// (piping live audio through a Worker would exceed execution limits). The
// 2026-08-15 media audit found the old single-URL redirect went dead the
// moment an upstream mount moved (HRT's StreamTheWorld mounts, CMC's port):
// the client got a valid 302 to a dead host and the player showed a useless
// "tap to retry". Now each station has an ORDERED CANDIDATE LIST; the
// function probes them (1-byte ranged GET, short timeout) and redirects to
// the first one that answers. The winner is cached in KV for 6 hours so the
// probe cost is paid once per station per window, not per listener. If every
// candidate is dead we return 502 JSON so the client can fall back to the
// station's public website instead of spinning forever.

const STATIONS = {
  hrt1: [
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1.mp3',
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1AAC.aac',
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1AAC_SC',
  ],
  hrt2: [
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM2.mp3',
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM2AAC.aac',
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM2AAC_SC',
  ],
  hrt3: [
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM3.mp3',
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM3AAC.aac',
    'https://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM3AAC_SC',
  ],
  cmc: ['https://radio.cmc.com.hr:8443/cmc_radio', 'https://radio.cmc.com.hr/cmc_radio'],
};

const GOOD_TTL_SECONDS = 6 * 60 * 60; // re-validate the winning URL every 6h
const PROBE_TIMEOUT_MS = 3500;

/** A candidate is alive if it answers the ranged GET with 2xx (audio servers
 * answer 200 and start streaming; some honour Range with 206). The body is
 * cancelled immediately — we only want the status line. */
async function probe(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Range: 'bytes=0-0', 'Icy-MetaData': '0' },
      redirect: 'follow',
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    });
    try {
      if (res.body) await res.body.cancel();
    } catch {
      /* body cancel is best-effort */
    }
    return res.status >= 200 && res.status < 300;
  } catch {
    return false;
  }
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const station = url.searchParams.get('s') || '';
  const candidates = STATIONS[station];

  if (!candidates) {
    return new Response('Unknown station', { status: 400 });
  }

  const kv = context.env.KV || context.env.PUSH_SUBSCRIPTIONS;
  const cacheKey = `radio:good:${station}`;
  // fresh=1 (the player's retry path) skips the cache: if the cached winner
  // died mid-TTL, the user's retry re-probes instead of re-hitting the corpse.
  const fresh = url.searchParams.get('fresh') === '1';

  // Last known good first — zero probes on the hot path.
  if (kv && !fresh) {
    try {
      const cached = await kv.get(cacheKey);
      if (cached && candidates.includes(cached)) {
        return Response.redirect(cached, 302);
      }
    } catch {
      /* KV read failure falls through to probing */
    }
  }

  for (const candidate of candidates) {
    if (await probe(candidate)) {
      if (kv) {
        try {
          await kv.put(cacheKey, candidate, { expirationTtl: GOOD_TTL_SECONDS });
        } catch {
          /* cache write is best-effort */
        }
      }
      return Response.redirect(candidate, 302);
    }
  }

  // Every candidate refused — tell the client honestly so it can offer the
  // station website instead of an infinite spinner.
  return new Response(JSON.stringify({ error: 'stream_unavailable', station }), {
    status: 502,
    headers: { 'Content-Type': 'application/json' },
  });
}
