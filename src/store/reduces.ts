/* eslint-disable @typescript-eslint/default-param-last */
import { combineReducers } from 'redux';

import {
  FilterAction,
  FilterEnum,
  TFilter,
  SortAction,
  SortEnum,
  ISearch,
  SearchAction,
  SearchEnum,
  IShow,
  ShowAction,
  ShowEnum,
} from '../types/types';

const initialFilter: TFilter = [0, 1, 2, 3];

const initialSort = SortEnum.SORT_PRICE;

const filterReducer = (state = initialFilter, action: FilterAction): TFilter => {
  const [none, one, two, three] = state;

  switch (action.type) {
    case FilterEnum.FILTER_ALL:
      return state.includes(null) ? [0, 1, 2, 3] : [null, null, null, null];

    case FilterEnum.FILTER_NONE:
      return none === 0 ? [null, one, two, three] : [0, one, two, three];
    case FilterEnum.FILTER_ONE:
      return one ? [none, null, two, three] : [none, 1, two, three];
    case FilterEnum.FILTER_TWO:
      return two ? [none, one, null, three] : [none, one, 2, three];
    case FilterEnum.FILTER_THREE:
      return three ? [none, one, two, null] : [none, one, two, 3];

    default:
      return state;
  }
};

const sortReducer = (state = initialSort, action: SortAction): SortEnum => {
  switch (action.type) {
    case SortEnum.SORT_PRICE:
      return SortEnum.SORT_PRICE;
    case SortEnum.SORT_SPEED:
      return SortEnum.SORT_SPEED;

    default:
      return state;
  }
};

const initialShowCount: IShow = 5;

const showCountReducer = (state = initialShowCount, action: ShowAction): IShow => {
  if (action.type === ShowEnum.SHOW_MORE) return state + 5;
  return state;
};

const initialSearchData: ISearch = {
  searchId: '',
  tickets: [],
  stop: false,
  loading: false,
  error: false,
  badResponse: 0,
};

const searchReducer = (state = initialSearchData, action: SearchAction): ISearch => {
  switch (action.type) {
    case SearchEnum.SEARCH_SUCCESS_ID:
      return { ...state, loading: false, error: false, searchId: action.searchId };

    case SearchEnum.SEARCH_SUCCESS_TICKETS:
      return action.stop
        ? { ...state, stop: true, loading: false, error: false }
        : { ...state, loading: false, error: false, tickets: [...state.tickets, ...action.tickets!] };

    case SearchEnum.SEARCH_ERROR:
      return { ...state, loading: false, error: true };

    case SearchEnum.SEARCH_BAD:
      return { ...state, loading: false, error: false, badResponse: state.badResponse + 1 };

    case SearchEnum.SEARCH_LOADING:
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
