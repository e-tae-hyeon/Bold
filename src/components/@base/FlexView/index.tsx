import React from 'react';
import {View} from 'react-native';

type FlexViewProps = {
  direction?: 'row' | 'column';
  gapSize?: 'large' | 'medium' | 'small' | 'tiny';
  className?: string;
  children: React.ReactNode;
};

function FlexView({
  direction = 'column',
  gapSize = 'medium',
  className,
  children,
}: FlexViewProps) {
  return (
    <View
      style={{flexDirection: direction, gap: gapSizeMap[gapSize]}}
      className={className}>
      {children}
    </View>
  );
}

export default FlexView;

const gapSizeMap = {
  large: 32,
  medium: 16,
  small: 8,
  tiny: 4,
};
