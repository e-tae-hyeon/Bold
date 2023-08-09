import {useNavigation} from '@react-navigation/native';
import colors from 'common/styles/colors';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React, {useState} from 'react';
import {KeyboardAvoidingView, TextInput} from 'react-native';
import useHomeStore from 'stores/useHomeStore';
import useWriteStore, {ItemType} from 'stores/useWriteStore';

function WriteForm() {
  const {type} = useWriteStore();
  const {addItem} = useHomeStore();
  const {goBack, navigate} = useNavigation<RootStackNavigationProps>();
  const [content, setContent] = useState('');

  const placeholder = placeholderMap[type];
  const bgColor = typeColorMap[type];

  const handleCancel = () => {
    goBack();
  };

  const handleSubmit = () => {
    navigate('MainTabs');
    addItem({type, content, createdAt: Date.now().toString()});
  };

  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1">
      <TextInput
        placeholder={placeholder}
        value={content}
        onChangeText={setContent}
        multiline
        autoFocus
        style={{fontFamily: 'Pretendard-Bold', fontSize: 16}}
        className="flex-1 px-4 py-12"
      />
      <FlexView direction="row" className="p-4">
        <Btn label="취소" onPress={handleCancel} isWidthFull />
        <Btn
          label="추가"
          onPress={handleSubmit}
          color={{bgColor, textColor: colors.white}}
          disabled={!content}
          isWidthFull
        />
      </FlexView>
    </KeyboardAvoidingView>
  );
}

export default WriteForm;

const placeholderMap: Record<ItemType, string> = {
  plus: `잘했거나\n지켰거나\n책임졌거나\n성장했거나`,
  minus: `못했거나\n어겼거나\n감정적이였거나\n퇴보했거나`,
};

const typeColorMap: Record<ItemType, string> = {
  plus: colors.red,
  minus: colors.blue,
};
