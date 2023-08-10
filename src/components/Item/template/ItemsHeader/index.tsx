import {useNavigation} from '@react-navigation/native';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable, View} from 'react-native';

function ItemsHeader() {
  const {goBack} = useNavigation();

  const handlePressBack = () => {
    goBack();
  };

  const handlePressTrash = () => {};

  return (
    <View className="flex-row items-center justify-between p-4 border-b border-neutral-200">
      <Pressable onPress={handlePressBack} hitSlop={16}>
        <SvgIcon name="chevronLeft" />
      </Pressable>
      <Pressable onPress={handlePressTrash} hitSlop={16}>
        <SvgIcon name="trash" />
      </Pressable>
    </View>
  );
}

export default ItemsHeader;
