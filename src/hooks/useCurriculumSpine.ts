// useCurriculumSpine — the course's lesson list, for a screen that can be OPENED COLD.
//
// A learner who refreshes /unittest, /unitproduction or /levelreview arrives with an empty
// spine cache. These screens read the cache ONCE at mount, so they concluded "the test could
// not be loaded" while the spine was still on its way and never looked again (found by a
// browser test that opened the screen by address, 2026-11-19). This hook reads the cache,
// fetches the spine when it is empty, and re-renders when it lands.
//
// `failed` is true ONLY when the fetch itself failed, so "no spine yet" is shown as loading
// and "the spine never arrived" is shown as a failure — the two are different facts.
import { useEffect, useState } from 'react';
import { readCurriculumSpine, CURRICULUM_SPINE_EVENT } from '../lib/curriculumProgress';
import type { CurriculumEntry } from '../lib/curriculum';
import { getCurriculumSpine } from '../lib/contentClient';

export function useCurriculumSpine(): { spine: CurriculumEntry[]; failed: boolean } {
  const [spine, setSpine] = useState<CurriculumEntry[]>(() => readCurriculumSpine());
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (spine.length > 0) return;
    let live = true;
    const onSpine = () => {
      if (live) setSpine(readCurriculumSpine());
    };
    window.addEventListener(CURRICULUM_SPINE_EVENT, onSpine);
    getCurriculumSpine()
      .then(() => onSpine())
      .catch(() => {
        if (live && readCurriculumSpine().length === 0) setFailed(true);
      });
    return () => {
      live = false;
      window.removeEventListener(CURRICULUM_SPINE_EVENT, onSpine);
    };
  }, [spine.length]);

  return { spine, failed };
}
