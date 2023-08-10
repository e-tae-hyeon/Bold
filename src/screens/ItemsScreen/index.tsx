import Layout from 'components/Global/template/Layout';
import ItemList from 'components/Item/template/ItemList';
import ItemsHeader from 'components/Item/template/ItemsHeader';
import React from 'react';

function ItemsScreen() {
  return (
    <Layout>
      <ItemsHeader />
      <ItemList />
    </Layout>
  );
}

export default ItemsScreen;
