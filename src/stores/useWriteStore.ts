import {create} from 'zustand';

export type ItemType = 'plus' | 'minus';

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
