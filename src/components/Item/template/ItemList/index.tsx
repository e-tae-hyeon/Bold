import {useRoute} from '@react-navigation/native';
import AppText from 'components/@base/AppText';
import ItemCard from 'components/Item/module/ItemCard';
import useItems from 'hooks/useItems';
import {ItemsScreenRouteProp} from 'navigations/RootStack/types';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {Item} from 'storages/itemStorage';
import useItemsStore from 'stores/useItemsStore';

function ItemList() {
  const {
    params: {dateString},
  } = useRoute<ItemsScreenRouteProp>();
  const {getItems, removeItem} = useItems();
  const {items, isModeRemove, initItems, subItem} = useItemsStore();

  useEffect(() => {
    const load = async () => {
      const loaded = await getItems(dateString);
      initItems(loaded);
    };
    load();
  }, [dateString]);

  const handlePressRemove = async (item: Item) => {
    subItem(item);
    await removeItem({date: dateString, item});
  };

  const renderItem: ListRenderItem<Item> = useCallback(
    ({item}) => (
      <ItemCard
        item={item}
        isVisibleRemove={isModeRemove}
        onPressRemove={handlePressRemove}
      />
    ),
    [items, isModeRemove],
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <View className="p-4">
            <AppText align="center">총 {items.length}개</AppText>
          </View>
        }
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View className="p-2" />}
        className="px-8"
        contentContainerStyle={{paddingBottom: 128}}
      />
    </View>
  );
}

export default ItemList;
