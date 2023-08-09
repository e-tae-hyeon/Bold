import colors from 'common/styles/colors';
import FlexView from 'components/@base/FlexView';
import React from 'react';
import {View} from 'react-native';
import {ItemType} from 'stores/useWriteStore';

type ItemStackIndicatorProps = {
  type: ItemType;
  length: number;
};

function ItemStackIndicator({type, length}: ItemStackIndicatorProps) {
  const tintColor = typeColorMap[type];

  return (
    <FlexView className="p-4">
      <FlexView gapSize="small" className="items-center">
        {Array(length)
          .fill(0)
          .map((_, idx) => (
            <View
              style={{backgroundColor: tintColor}}
              className="w-6 h-1 rounded-lg"
              key={idx}
            />
          ))}
      </FlexView>
      <View className="px-4 py-1 rounded-lg bg-neutral-200" />
    </FlexView>
  );
}

export default ItemStackIndicator;

const typeColorMap: Record<ItemType, string> = {
  plus: colors.red,
  minus: colors.blue,
};
