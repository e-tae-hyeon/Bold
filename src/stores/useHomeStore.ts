import {Item} from 'storages/itemStorage';
import {create} from 'zustand';

type State = {
  items: Item[];
};

type Actions = {
  initItems: (by: Item[]) => void;
  addItem: (by: Item) => void;
};

const initialState: State = {
  items: [],
};

const useHomeStore = create<State & Actions>()(set => ({
  ...initialState,
  initItems: by => set(state => ({...state, items: by})),
  addItem: by => set(state => ({...state, items: [by, ...state.items]})),
}));

export default useHomeStore;
