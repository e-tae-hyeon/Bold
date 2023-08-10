import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

type SettingCellProps = {
  label: string;
  value: string;
};

function SettingsCell({label, value}: SettingCellProps) {
  return (
    <View className="flex-row items-center justify-between p-4">
      <AppText>{label}</AppText>
      <AppText>{value}</AppText>
    </View>
  );
}

export default SettingsCell;
