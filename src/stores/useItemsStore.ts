import {Item} from 'storages/itemStorage';
import {create} from 'zustand';

type State = {
  items: Item[];
  isModeRemove: boolean;
};

type Actions = {
  initItems: (by: Item[]) => void;
  subItem: (by: Item) => void;
  setIsModeRemove: (by: boolean) => void;
};

const initialState: State = {
  items: [],
  isModeRemove: false,
};

const useItemsStore = create<State & Actions>()(set => ({
  ...initialState,
  initItems: by => set(state => ({...state, items: by})),
  subItem: by =>
    set(state => ({
      ...state,
      items: state.items.filter(item => item.id !== by.id),
    })),
  setIsModeRemove: by => set(state => ({...state, isModeRemove: by})),
}));

export default useItemsStore;
