import {useNavigation} from '@react-navigation/native';
import AppText from 'components/@base/AppText';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable, View} from 'react-native';
import useItemsStore from 'stores/useItemsStore';

function ItemsHeader() {
  const {goBack} = useNavigation();
  const {isModeRemove, setIsModeRemove} = useItemsStore();

  const handlePressBack = () => {
    goBack();
    setIsModeRemove(false);
  };

  const handlePressAction = () => {
    setIsModeRemove(!isModeRemove);
  };

  return (
    <View className="flex-row items-center justify-between p-4 border-b border-neutral-200">
      <Pressable onPress={handlePressBack} hitSlop={16}>
        <SvgIcon name="chevronLeft" />
      </Pressable>
      <Pressable onPress={handlePressAction} hitSlop={16}>
        {isModeRemove ? <AppText>취소</AppText> : <SvgIcon name="trash" />}
      </Pressable>
    </View>
  );
}

export default ItemsHeader;
