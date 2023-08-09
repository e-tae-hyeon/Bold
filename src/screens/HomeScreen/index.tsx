import Header from 'components/Global/template/Header';
import Layout from 'components/Global/template/Layout';
import ItemActors from 'components/Home/template/ItemActors';
import ToGoCollect from 'components/Home/template/ToGoCollect';
import TodayIndicator from 'components/Home/template/TodayIndicator';
import React from 'react';

function HomeScreen() {
  return (
    <Layout>
      <Header title="Bold" />
      <TodayIndicator />
      <ItemActors />
      <ToGoCollect />
    </Layout>
  );
}

export default HomeScreen;
