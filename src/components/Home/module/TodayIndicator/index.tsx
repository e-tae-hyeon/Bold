import AppText from 'components/@base/AppText';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {View} from 'react-native';

function TodayIndicator() {
  return (
    <View className="items-center justify-center p-4">
      <AppText>{format(new Date(), 'yy년 M월 d일 (E)', {locale: ko})}</AppText>
    </View>
  );
}

export default TodayIndicator;
