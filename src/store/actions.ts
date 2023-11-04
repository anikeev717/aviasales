import { Dispatch } from 'redux';
import axios from 'axios';

import * as types from '../types/types';

export const allFilter = (): types.FilterAll => ({
  type: types.FilterTypes.FILTER_ALL,
});

export const noneFilter = (): types.FilterNone => ({
  type: types.FilterTypes.FILTER_NONE,
});

export const oneFilter = (): types.FilterOne => ({
  type: types.FilterTypes.FILTER_ONE,
});

export const twoFilter = (): types.FilterTwo => ({
  type: types.FilterTypes.FILTER_TWO,
});

export const threeFilter = (): types.FilterThree => ({
  type: types.FilterTypes.FILTER_THREE,
});

export const priceSort = (): types.SortPrice => ({
  type: types.SortTypes.SORT_PRICE,
});

export const speedSort = (): types.SortSpeed => ({
  type: types.SortTypes.SORT_SPEED,
});

export const showMore = (): types.ShowAction => ({
  type: types.ShowType.SHOW_MORE,
});

export const successTickets = (tickets: types.Tickets, stop: boolean): types.SearchSuccessTickets => ({
  type: types.SearchTypes.SEARCH_SUCCESS_TICKETS,
  tickets,
  stop,
});

export const successId = (searchId: string): types.SearchSuccessId => ({
  type: types.SearchTypes.SEARCH_SUCCESS_ID,
  searchId,
});

export const loadingSearch = (): types.SearchLoading => ({
  type: types.SearchTypes.SEARCH_LOADING,
});

export const errorSearch = (): types.SearchError => ({
  type: types.SearchTypes.SEARCH_ERROR,
});

export const FetchData = (searchId?: string) => {
  return async (dispatch: Dispatch<types.SearchAction>) => {
    dispatch(loadingSearch());
    try {
      if (searchId) {
        const resp = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
        const { tickets, stop } = resp.data;
        dispatch(successTickets(tickets, stop));
      } else {
        const resp = await axios.get(`https://aviasales-test-api.kata.academy/search`);
        dispatch({ type: types.SearchTypes.SEARCH_SUCCESS_ID, searchId: resp.data.searchId });
      }
    } catch (error) {
      dispatch(errorSearch());
    }
  };
};
