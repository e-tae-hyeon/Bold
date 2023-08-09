import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemType} from 'stores/useWriteStore';

export type Item = {
  type: ItemType;
  content: string;
  createdAt: string;
};

const itemStorage = {
  async setItems({today, items}: {today: string; items: Item[]}) {
    try {
      await AsyncStorage.setItem(genKey(today), JSON.stringify(items));
    } catch (err) {}
  },
  async getItems({today}: {today: string}) {
    try {
      const raw = await AsyncStorage.getItem(genKey(today));

      if (!raw) return undefined;
      return JSON.parse(raw) as Item[];
    } catch (err) {}
  },
};

export default itemStorage;

const genKey = (today: string) => {
  return `${today}-items`;
};
