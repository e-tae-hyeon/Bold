import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import SvgIcon from 'components/@base/SvgIcon';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React from 'react';
import {Pressable, View} from 'react-native';
import {Item, ItemType} from 'storages/itemStorage';

type ItemCardProps = {
  item: Item;
  isVisibleRemove?: boolean;
  onPressRemove?: (item: Item) => void;
};

function ItemCard({
  item,
  isVisibleRemove = false,
  onPressRemove,
}: ItemCardProps) {
  const {id, type, content, createdAt} = item;

  const handlePressRemove = () => {
    if (onPressRemove) onPressRemove(item);
  };

  return (
    <View
      className="p-4 border rounded-lg "
      style={{borderColor: typeColorMap[type]}}>
      <View className="flex-row justify-between h-6">
        <AppText typoStyle="Caption" color={colors.gray[300]}>
          {format(new Date(createdAt), 'yy년 MM월 dd일 (E) HH:mm', {
            locale: ko,
          })}
        </AppText>
        {isVisibleRemove && (
          <Pressable onPress={handlePressRemove} hitSlop={8}>
            <SvgIcon name="xSquare" size={20} />
          </Pressable>
        )}
      </View>
      <AppText>{content}</AppText>
    </View>
  );
}

export default ItemCard;

const typeColorMap: Record<ItemType, string> = {
  plus: colors.red,
  minus: colors.blue,
};
