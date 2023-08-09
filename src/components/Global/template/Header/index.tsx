import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

type HeaderProps = {
  title: string;
};

function Header({title}: HeaderProps) {
  return (
    <View className="border-b p-2 border-neutral-200">
      <AppText typoStyle="H2">{title}</AppText>
    </View>
  );
}

export default Header;
