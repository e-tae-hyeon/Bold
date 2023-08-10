import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';

function ItemsNavigator() {
  return (
    <FlexView direction="row" gapSize="tiny" className="p-2 ">
      <AppText typoStyle="B2" color={colors.gray[300]}>
        모두 보기
      </AppText>
      <SvgIcon name="chevronRight" size={16} color={colors.gray[300]} />
    </FlexView>
  );
}

export default ItemsNavigator;
