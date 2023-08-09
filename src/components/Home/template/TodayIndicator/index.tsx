import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

function TodayIndicator() {
  return (
    <View className="items-center justify-center p-4">
      <AppText>today</AppText>
    </View>
  );
}

export default TodayIndicator;
