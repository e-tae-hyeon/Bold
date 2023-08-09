import {useNavigation} from '@react-navigation/native';
import FlexView from 'components/@base/FlexView';
import ItemActor from 'components/Home/module/ItemActor';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React from 'react';
import useHomeStore from 'stores/useHomeStore';
import useWriteStore from 'stores/useWriteStore';

function ItemActors() {
  const {setType} = useWriteStore();
  const {items} = useHomeStore();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const plusItems = items.filter(item => item.type === 'plus');
  const minusItems = items.filter(item => item.type === 'minus');

  const handlePressPlus = () => {
    setType('plus');
    navigate('Write');
  };

  const handlePressMinus = () => {
    setType('minus');
    navigate('Write');
  };

  return (
    <FlexView
      gapSize="large"
      direction="row"
      className="items-end justify-center flex-1 py-4">
      <ItemActor
        type="plus"
        itemLength={plusItems.length}
        onPressWrite={handlePressPlus}
      />
      <ItemActor
        type="minus"
        itemLength={minusItems.length}
        onPressWrite={handlePressMinus}
      />
    </FlexView>
  );
}

export default ItemActors;
