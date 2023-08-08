import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabsParamList} from './types';
import HomeScreen from 'screens/HomeScreen';
import ReportScreen from 'screens/ReportScreen';
import SettingsScreen from 'screens/SetttingsScreen';

const Tab = createBottomTabNavigator<MainTabsParamList>();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
