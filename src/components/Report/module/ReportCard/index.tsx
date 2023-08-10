import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import SvgIcon from 'components/@base/SvgIcon';
import ItemsNavigator from 'components/Home/module/ItemsNavigator';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {Pressable, View} from 'react-native';

type ReportCardProps = {
  dateString: string;
  length: {plus: number; minus: number};
  onPress: () => void;
};

function ReportCard({dateString, length, onPress}: ReportCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="border rounded-lg border-neutral-200">
      <FlexView gapSize="large" className="p-4 pb-2">
        <AppText>
          {format(new Date(dateString), 'yy년 MM월 dd일 (E)', {
            locale: ko,
          })}
        </AppText>
        <FlexView direction="row" className="items-center justify-center">
          <View
            className="p-1 rounded-lg"
            style={{backgroundColor: colors.red}}>
            <SvgIcon name="plus" color={colors.white} size={18} />
          </View>
          <AppText color={colors.red}>{length.plus}</AppText>
          <View
            className="p-1 rounded-lg"
            style={{backgroundColor: colors.blue}}>
            <SvgIcon name="minus" color={colors.white} size={18} />
          </View>
          <AppText color={colors.blue}>{length.minus}</AppText>
        </FlexView>
      </FlexView>
      <View className="flex-row justify-end">
        <ItemsNavigator />
      </View>
    </Pressable>
  );
}

export default ReportCard;
