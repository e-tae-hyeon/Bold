import colors from 'common/styles/colors';
import React from 'react';
import {Text} from 'react-native';

type AppTextProps = {
  typoStyle?: TypoStyle;
  color?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

function AppText({
  typoStyle = 'B1',
  color = colors.black,
  align = 'left',
  children,
}: AppTextProps) {
  const {fontSize} = typoStyleMap[typoStyle];

  return (
    <Text
      style={{
        fontSize,
        fontFamily: 'Pretendard-Bold',
        textAlignVertical: 'center',
        textAlign: align,
        color,
      }}>
      {children}
    </Text>
  );
}

export default AppText;

export type TypoStyle = 'H1' | 'H2' | 'B1' | 'B2' | 'Caption';

const typoStyleMap: Record<TypoStyle, {fontSize: number}> = {
  H1: {fontSize: 24},
  H2: {fontSize: 20},
  B1: {fontSize: 16},
  B2: {fontSize: 14},
  Caption: {fontSize: 12},
};
