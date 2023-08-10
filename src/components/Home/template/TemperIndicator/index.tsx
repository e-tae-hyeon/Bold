import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';
import useHomeStore from 'stores/useHomeStore';

function TemperIndicator() {
  const {items} = useHomeStore();

  const LEGNTH_OF_MAX = 280;
  const lengthOfPlusItems = items.filter(item => item.type === 'plus').length;
  const lengthOfMinusItems = items.filter(item => item.type === 'minus').length;
  const temper = lengthOfPlusItems - lengthOfMinusItems;
  const lengthOfTemper = Math.min(
    (Math.abs(temper) * LEGNTH_OF_MAX) / 2 / 10,
    LEGNTH_OF_MAX / 2,
  );

  return (
    <View className="items-center justify-center p-4">
      <View
        className="flex-row items-center justify-center h-2 rounded-lg bg-neutral-200"
        style={{width: LEGNTH_OF_MAX}}>
        <View className="items-end justify-end flex-1 border-r">
          <View
            style={{
              backgroundColor: colors.blue,
              width: temper < 0 ? lengthOfTemper : 0,
            }}
            className="h-full rounded-l-lg"
          />
        </View>
        <View className="flex-1 border-l">
          <View
            style={{
              backgroundColor: colors.red,
              width: temper > 0 ? lengthOfTemper : 0,
            }}
            className="h-full rounded-r-lg"
          />
        </View>
      </View>
      <View className="flex-row justify-between w-[280px] py-2">
        <AppText color={colors.blue}>{lengthOfMinusItems}</AppText>
        <AppText color={colors.red}>{lengthOfPlusItems}</AppText>
      </View>
    </View>
  );
}

export default TemperIndicator;
