import {useNavigation} from '@react-navigation/native';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import SvgIcon from 'components/@base/SvgIcon';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React from 'react';
import {Pressable, View} from 'react-native';

function ToGoCollect() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const handlePress = () => {
    navigate('Items');
  };

  return (
    <View className="items-center justify-center p-4">
      <Pressable onPress={handlePress} className="p-4">
        <FlexView
          direction="row"
          gapSize="tiny"
          className="items-center justify-center">
          <AppText typoStyle="B2" color={colors.gray[300]}>
            작성한 양분 보기
          </AppText>
          <SvgIcon name="chevronRight" size={16} color={colors.gray[300]} />
        </FlexView>
      </Pressable>
    </View>
  );
}

export default ToGoCollect;
