import {ItemType} from 'storages/itemStorage';
import {create} from 'zustand';

type State = {
  type: ItemType;
};

type Actions = {
  setType: (by: ItemType) => void;
};

const initialState: State = {
  type: 'plus',
};

const useWriteStore = create<State & Actions>()(set => ({
  ...initialState,
  setType: by => set(state => ({...state, type: by})),
}));

export default useWriteStore;
