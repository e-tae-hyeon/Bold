import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MainTabs: undefined;
  Write: undefined;
  Collect: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
