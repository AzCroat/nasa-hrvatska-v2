// The dispatcher: picks the component for an exercise from its `type`. No type (or
// 'choice') is multiple choice; 'type' is the typed item. Unknown types render
// nothing — and are settled by the sequence — so one bad item can never strand a
// learner on a slide.
import React, { useEffect } from 'react';
import { ChoiceItem, TypedItem } from './ChoiceItem';
import TrueFalseItem from './TrueFalseItem';
import MatchItem from './MatchItem';
import SortItem from './SortItem';
import OrderItem from './OrderItem';
import TransformItem from './TransformItem';
import FixItem from './FixItem';
import ListenItem from './ListenItem';
import DictateItem from './DictateItem';
import type { Exercise, ItemProps } from './types';

/** The short label for an item's kind, shown in the eyebrow. */
export const KIND_LABEL: Record<string, string> = {
  choice: 'choose',
  type: 'write it',
  tf: 'true or false',
  match: 'match',
  sort: 'sort',
  order: 'put in order',
  transform: 'rewrite it',
  fix: 'find the mistake',
  listen: 'listen',
  dictate: 'dictate',
};

export const kindOf = (e: Exercise): string => e.type ?? 'choice';

export const KNOWN_KINDS = Object.keys(KIND_LABEL);

export default function ExerciseItem(props: ItemProps<Exercise>) {
  const { item } = props;
  switch (item.type) {
    case 'type':
      return <TypedItem {...props} item={item} />;
    case 'tf':
      return <TrueFalseItem {...props} item={item} />;
    case 'match':
      return <MatchItem {...props} item={item} />;
    case 'sort':
      return <SortItem {...props} item={item} />;
    case 'order':
      return <OrderItem {...props} item={item} />;
    case 'transform':
      return <TransformItem {...props} item={item} />;
    case 'fix':
      return <FixItem {...props} item={item} />;
    case 'listen':
      return <ListenItem {...props} item={item} />;
    case 'dictate':
      return <DictateItem {...props} item={item} />;
    case undefined:
    case 'choice':
      return <ChoiceItem {...props} item={item} />;
    default:
      return <Unsupported onSettle={props.onSettle} />;
  }
}

/** An item kind this build does not know (newer payload): settled as skipped so the
 *  slide can never hold the learner. */
function Unsupported({ onSettle }: { onSettle: ItemProps<Exercise>['onSettle'] }) {
  useEffect(() => {
    onSettle('skipped');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
