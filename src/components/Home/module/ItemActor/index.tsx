import FlexView from 'components/@base/FlexView';
import ItemStackIndicator from 'components/Item/module/ItemStackIndicator';
import WriteTriggerBtn from 'components/Write/module/WriteTriggerBtn';
import React from 'react';
import {ItemType} from 'stores/useWriteStore';

type ItemActorProps = {
  type: ItemType;
  itemLength: number;
  onPressWrite: () => void;
};

function ItemActor({type, itemLength, onPressWrite}: ItemActorProps) {
  return (
    <FlexView>
      <ItemStackIndicator type={type} length={itemLength} />
      <WriteTriggerBtn type={type} onPress={onPressWrite} />
    </FlexView>
  );
}

export default ItemActor;
