import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MainTabs: undefined;
  Write: undefined;
  Items: {dateString: string};
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export type ItemsScreenRouteProp = RouteProp<RootStackParamList, 'Items'>;
