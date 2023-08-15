import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default CodePush(App);
