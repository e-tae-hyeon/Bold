import Header from 'components/Global/template/Header';
import Layout from 'components/Global/template/Layout';
import RecentItemList from 'components/Home/template/RecentItemList';
import TemperIndicator from 'components/Home/template/TemperIndicator';
import TodayIndicator from 'components/Home/template/TodayIndicator';
import WriteNavigators from 'components/Write/template/WriteNavigators';
import React from 'react';
import {View} from 'react-native';

function HomeScreen() {
  return (
    <Layout>
      <Header title="Bold" />
      <View className="flex-1 py-4">
        <TodayIndicator />
        <TemperIndicator />
        <RecentItemList />
        <WriteNavigators />
      </View>
    </Layout>
  );
}

export default HomeScreen;
