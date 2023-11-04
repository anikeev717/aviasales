/* eslint-disable @typescript-eslint/default-param-last */
import { combineReducers } from 'redux';

import {
  FilterAction,
  FilterTypes,
  IStateFilter,
  SortAction,
  SortTypes,
  IStateSearchData,
  SearchAction,
  SearchTypes,
  IStateShowCount,
  ShowAction,
  ShowType,
} from '../types/types';

const initialFilter: IStateFilter = [0, 1, 2, 3];

const initialSort = SortTypes.SORT_PRICE;

const filterReducer = (state = initialFilter, action: FilterAction): IStateFilter => {
  const [none, one, two, three] = state;

  switch (action.type) {
    case FilterTypes.FILTER_ALL:
      return state.includes(null) ? [0, 1, 2, 3] : [null, null, null, null];

    case FilterTypes.FILTER_NONE:
      return none === 0 ? [null, one, two, three] : [0, one, two, three];
    case FilterTypes.FILTER_ONE:
      return one ? [none, null, two, three] : [none, 1, two, three];
    case FilterTypes.FILTER_TWO:
      return two ? [none, one, null, three] : [none, one, 2, three];
    case FilterTypes.FILTER_THREE:
      return three ? [none, one, two, null] : [none, one, two, 3];

    default:
      return state;
  }
};

const sortReducer = (state = initialSort, action: SortAction): SortTypes => {
  switch (action.type) {
    case SortTypes.SORT_PRICE:
      return SortTypes.SORT_PRICE;
    case SortTypes.SORT_SPEED:
      return SortTypes.SORT_SPEED;

    default:
      return state;
  }
};

const initialShowCount: IStateShowCount = 5;

const showCountReducer = (state = initialShowCount, action: ShowAction): IStateShowCount => {
  if (action.type === ShowType.SHOW_MORE) return state + 5;
  return state;
};

const initialSearchData: IStateSearchData = {
  searchId: '',
  tickets: [],
  stop: false,
  loading: false,
  error: false,
};

const searchReducer = (state = initialSearchData, action: SearchAction): IStateSearchData => {
  switch (action.type) {
    case SearchTypes.SEARCH_SUCCESS_ID:
      return { ...state, loading: false, error: false, searchId: action.searchId };

    case SearchTypes.SEARCH_SUCCESS_TICKETS:
      return action.stop
        ? { ...state, stop: true, loading: false, error: false }
        : { ...state, loading: false, error: false, tickets: [...state.tickets, ...action.tickets!] };

    case SearchTypes.SEARCH_ERROR:
      return { ...state, loading: false, error: true };

    case SearchTypes.SEARCH_LOADING:
      return { ...state, loading: true, error: false };

    default:
      return state;
  }
};

export const reducer = combineReducers({
  filter: filterReducer,
  sortStatus: sortReducer,
  searchData: searchReducer,
  showCount: showCountReducer,
});

export type RootState = ReturnType<typeof reducer>;
