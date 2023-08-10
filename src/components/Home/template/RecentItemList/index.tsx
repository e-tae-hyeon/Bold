import {useFocusEffect} from '@react-navigation/native';
import FlexView from 'components/@base/FlexView';
import ItemsNavigator from 'components/Home/module/ItemsNavigator';
import ItemCard from 'components/Item/module/ItemCard';
import useItems from 'hooks/useItems';
import React, {useCallback} from 'react';
import useHomeStore from 'stores/useHomeStore';
import {formatDateString} from 'utils/formatDate';

function RecentItemList() {
  const {items, initItems} = useHomeStore();
  const {getItems} = useItems();

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
    <FlexView gapSize="small" className="px-8 py-4">
      {items.slice(0, 3).map(item => (
        <ItemCard item={item} key={item.id} isClipContent />
      ))}
      <ItemsNavigator />
    </FlexView>
  );
}

export default RecentItemList;
