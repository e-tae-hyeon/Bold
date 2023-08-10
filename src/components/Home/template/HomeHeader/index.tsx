import TodayIndicator from 'components/Home/module/TodayIndicator';
import React from 'react';
import {View} from 'react-native';

function HomeHeader() {
  return (
    <View className="border-b border-neutral-200">
      <TodayIndicator />
    </View>
  );
}

export default HomeHeader;
