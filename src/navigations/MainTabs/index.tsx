import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabsParamList} from './types';
import HomeScreen from 'screens/HomeScreen';
import ReportScreen from 'screens/ReportScreen';
import SettingsScreen from 'screens/SetttingsScreen';
import SvgIcon from 'components/@base/SvgIcon';
import colors from 'common/styles/colors';

const Tab = createBottomTabNavigator<MainTabsParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SvgIcon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SvgIcon name="barChart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SvgIcon name="settings" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
