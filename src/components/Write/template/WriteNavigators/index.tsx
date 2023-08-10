import {useNavigation} from '@react-navigation/native';
import FlexView from 'components/@base/FlexView';
import WriteNavigator from 'components/Write/module/WriteNavigator';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React from 'react';
import useWriteStore from 'stores/useWriteStore';

function WriteNavigators() {
  const {setType} = useWriteStore();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const handlePressMinus = () => {
    setType('minus');
    navigate('Write');
  };

  const handlePressPlus = () => {
    setType('plus');
    navigate('Write');
  };

  return (
    <FlexView
      direction="row"
      gapSize="large"
      className="items-center justify-center">
      <WriteNavigator type="minus" onPress={handlePressMinus} />
      <WriteNavigator type="plus" onPress={handlePressPlus} />
    </FlexView>
  );
}

export default WriteNavigators;
