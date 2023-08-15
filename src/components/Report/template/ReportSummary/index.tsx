import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ReportCard from 'components/Report/module/ReportCard';
import useItems from 'hooks/useItems';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {Item} from 'storages/itemStorage';
import useRecordStore from 'stores/useRecordStore';

function ReportSummary() {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const {selectedDateString} = useRecordStore();
  const {getItems} = useItems();
  const [items, setItems] = useState<Item[]>([]);

  const lengthOfPlus = items.filter(item => item.type === 'plus').length;
  const lengthOfMinus = items.filter(item => item.type === 'minus').length;

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const loaded = await getItems(selectedDateString);
        setItems(loaded);
      };
      load();
    }, [selectedDateString]),
  );

  const handlePress = () => {
    navigate('Items', {dateString: selectedDateString});
  };

  return (
    <View className="p-8">
      <ReportCard
        dateString={selectedDateString}
        length={{plus: lengthOfPlus, minus: lengthOfMinus}}
        onPress={handlePress}
      />
    </View>
  );
}

export default ReportSummary;
