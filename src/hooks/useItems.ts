import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import itemStorage, {Item, ItemType} from 'storages/itemStorage';
import {formatDateString} from 'utils/formatDate';

function useItems() {
  const getItems = async (date: string) => {
    const items = await itemStorage.getItems({date});

    return items ?? [];
  };

  const createItem = async (params: {type: ItemType; content: string}) => {
    const {type, content} = params;
    const today = new Date();
    const prevItems = await getItems(formatDateString(today));
    const newItem: Item = {
      id: nanoid(),
      type,
      content,
      createdAt: today.getTime(),
    };

    await itemStorage.setItems({
      date: formatDateString(today),
      items: [newItem, ...prevItems],
    });

    return newItem;
  };

  const removeItem = async (params: {date: string; item: Item}) => {
    const {date, item: target} = params;

    const prevItems = await getItems(date);

    await itemStorage.setItems({
      date,
      items: prevItems.filter(item => item.id !== target.id),
    });
  };

  return {getItems, createItem, removeItem};
}

export default useItems;
