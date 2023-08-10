import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {View} from 'react-native';
import {Item, ItemType} from 'storages/itemStorage';

type ItemCardProps = {
  item: Item;
};

function ItemCard({item}: ItemCardProps) {
  const {type, content, createdAt} = item;

  return (
    <View
      className="p-4 border rounded-lg"
      style={{borderColor: typeColorMap[type]}}>
      <AppText typoStyle="Caption" color={colors.gray[300]}>
        {format(new Date(createdAt), 'yy년 MM월 dd일 (E) HH:mm', {locale: ko})}
      </AppText>
      <AppText>{content}</AppText>
    </View>
  );
}

export default ItemCard;

const typeColorMap: Record<ItemType, string> = {
  plus: colors.red,
  minus: colors.blue,
};
