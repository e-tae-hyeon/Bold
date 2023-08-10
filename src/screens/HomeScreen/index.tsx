import Layout from 'components/Global/template/Layout';
import HomeHeader from 'components/Home/template/HomeHeader';
import RecentItemList from 'components/Home/template/RecentItemList';
import TemperIndicator from 'components/Home/template/TemperIndicator';
import WriteNavigators from 'components/Write/template/WriteNavigators';
import React from 'react';
import {View} from 'react-native';

function HomeScreen() {
  return (
    <Layout>
      <HomeHeader />
      <View className="flex-1 py-8">
        <TemperIndicator />
        <RecentItemList />
        <WriteNavigators />
      </View>
    </Layout>
  );
}

export default HomeScreen;
