import {Item} from 'storages/itemStorage';
import {create} from 'zustand';

type State = {
  items: Item[];
};

type Actions = {
  addItem: (by: Item) => void;
};

const initialState: State = {
  items: [],
};

const useHomeStore = create<State & Actions>()(set => ({
  ...initialState,
  addItem: by => set(state => ({...state, items: [...state.items, by]})),
}));

export default useHomeStore;
