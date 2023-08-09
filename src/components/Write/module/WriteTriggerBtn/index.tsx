import colors from 'common/styles/colors';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable} from 'react-native';
import {ItemType} from 'stores/useWriteStore';

type WriteTriggerBtnProps = {
  type: ItemType;
  onPress: () => void;
};

function WriteTriggerBtn({type, onPress}: WriteTriggerBtnProps) {
  const {bgColor} = typeMap[type];

  return (
    <Pressable
      onPress={onPress}
      className="p-8 rounded-lg shadow-sm aspect-square"
      style={{backgroundColor: bgColor}}>
      <SvgIcon name={type} color={colors.white} />
    </Pressable>
  );
}

export default WriteTriggerBtn;

const typeMap: Record<ItemType, {bgColor: string}> = {
  plus: {
    bgColor: colors.red,
  },
  minus: {
    bgColor: colors.blue,
  },
};
