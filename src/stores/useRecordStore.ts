import {formatDateString} from 'utils/formatDate';
import {create} from 'zustand';

type State = {
  selectedDateString: string;
};

type Actions = {
  selectDateString: (by: string) => void;
};

const initialState: State = {
  selectedDateString: formatDateString(new Date()),
};

const useRecordStore = create<State & Actions>()(set => ({
  ...initialState,
  selectDateString: by => set(state => ({...state, selectedDateString: by})),
}));

export default useRecordStore;
