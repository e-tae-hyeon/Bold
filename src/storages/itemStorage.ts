import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemType} from 'stores/useWriteStore';

export type Item = {
  type: ItemType;
  content: string;
  createdAt: string;
};

const itemStorage = {
  async setItems({date, items}: {date: string; items: Item[]}) {
    try {
      await AsyncStorage.setItem(genKey(date), JSON.stringify(items));
    } catch (err) {}
  },
  async getItems({date}: {date: string}) {
    try {
      const raw = await AsyncStorage.getItem(genKey(date));

      if (!raw) return undefined;
      return JSON.parse(raw) as Item[];
    } catch (err) {}
  },
};

export default itemStorage;

const genKey = (date: string) => {
  return `${date}-items`;
};
