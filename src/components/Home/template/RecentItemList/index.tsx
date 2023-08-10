import {useFocusEffect, useNavigation} from '@react-navigation/native';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import ItemsNavigator from 'components/Home/module/ItemsNavigator';
import ItemCard from 'components/Item/module/ItemCard';
import useItems from 'hooks/useItems';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React, {useCallback} from 'react';
import {Pressable, View} from 'react-native';
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

  if (items.length <= 0)
    return (
      <View className="items-center justify-center flex-1">
        <AppText typoStyle="B2" align="center" color={colors.gray[300]}>
          책임지는 사람이 될 때까지
        </AppText>
      </View>
    );

  return (
    <View className="flex-1">
      <Pressable onPress={handlePress} className="px-8">
        <FlexView gapSize="small">
          {items.slice(0, 3).map(item => (
            <ItemCard item={item} key={item.id} isClipContent />
          ))}
          <ItemsNavigator />
        </FlexView>
      </Pressable>
    </View>
  );
}

export default RecentItemList;
