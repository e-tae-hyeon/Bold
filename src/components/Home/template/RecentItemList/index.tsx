import {useFocusEffect, useNavigation} from '@react-navigation/native';
import FlexView from 'components/@base/FlexView';
import ItemsNavigator from 'components/Home/module/ItemsNavigator';
import ItemCard from 'components/Item/module/ItemCard';
import useItems from 'hooks/useItems';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import useHomeStore from 'stores/useHomeStore';
import {formatDateString} from 'utils/formatDate';

function RecentItemList() {
  const {items, initItems} = useHomeStore();
  const {getItems} = useItems();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const handlePress = () => {
    navigate('Items', {dateString: formatDateString(new Date())});
  };

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const loaded = await getItems(formatDateString(new Date()));
        initItems(loaded);
      };
      load();
    }, []),
  );

  return (
    <Pressable onPress={handlePress}>
      <FlexView gapSize="small" className="px-8 py-4">
        {items.slice(0, 3).map(item => (
          <ItemCard item={item} key={item.id} isClipContent />
        ))}
        <ItemsNavigator />
      </FlexView>
    </Pressable>
  );
}

export default RecentItemList;
