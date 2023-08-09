import React from 'react';
import AppText from '../AppText';
import {Pressable} from 'react-native';
import colors from 'common/styles/colors';

type BtnProps = {
  label: string;
  onPress: () => void;
  color?: {bgColor: string; textColor: string};
  isWidthFull: boolean;
  disabled?: boolean;
};

function Btn({
  label,
  onPress,
  color,
  isWidthFull = false,
  disabled = false,
}: BtnProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{backgroundColor: color?.bgColor ?? colors.gray[200]}}
      className={`${isWidthFull && 'flex-1'} ${
        disabled && 'opacity-10'
      } items-center justify-center px-16 py-2 rounded-lg`}>
      <AppText color={color?.textColor}>{label}</AppText>
    </Pressable>
  );
}

export default Btn;
