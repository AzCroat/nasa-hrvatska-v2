import { authedRead } from './_authedRead.js';
import { ETAGS } from './_data/_etags.js';
import * as CORE from './_data/core.js';

// The payload's key list lives in `_data/core.js` as `CORE_PAYLOAD_KEYS` —
// one definition read by this endpoint, the etag generator and core.test.js.
// Three hand-written copies had already diverged; see the comment there.
const KEYS = CORE.CORE_PAYLOAD_KEYS;

function buildBody() {
  const data = {};
  for (const k of KEYS) data[k] = CORE[k];
  return { data };
}

export async function onRequestGet(context) {
  return authedRead({
    request: context.request,
    env: context.env,
    etag: ETAGS.core,
    buildBody,
  });
}

export const onRequestOptions = onRequestGet;
