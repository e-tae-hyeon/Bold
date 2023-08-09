import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './types';
import MainTabs from 'navigations/MainTabs';
import WriteScreen from 'screens/WriteScreen';
import CollectScreen from 'screens/CollectScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{presentation: 'fullScreenModal'}}
      />
      <Stack.Screen name="Collect" component={CollectScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
