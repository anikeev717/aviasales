import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';

import * as types from '../types/types';

export const allFilter = (): types.FilterAll => ({
  type: types.FilterEnum.FILTER_ALL,
});

export const noneFilter = (): types.FilterNone => ({
  type: types.FilterEnum.FILTER_NONE,
});

export const oneFilter = (): types.FilterOne => ({
  type: types.FilterEnum.FILTER_ONE,
});

export const twoFilter = (): types.FilterTwo => ({
  type: types.FilterEnum.FILTER_TWO,
});

export const threeFilter = (): types.FilterThree => ({
  type: types.FilterEnum.FILTER_THREE,
});

export const priceSort = (): types.SortPrice => ({
  type: types.SortEnum.SORT_PRICE,
});

export const speedSort = (): types.SortSpeed => ({
  type: types.SortEnum.SORT_SPEED,
});

export const showMore = (): types.ShowAction => ({
  type: types.ShowEnum.SHOW_MORE,
});

export const successTickets = (tickets: types.TTickets, stop: boolean): types.SearchSuccessTickets => ({
  type: types.SearchEnum.SEARCH_SUCCESS_TICKETS,
  tickets,
  stop,
});

export const successId = (searchId: string): types.SearchSuccessId => ({
  type: types.SearchEnum.SEARCH_SUCCESS_ID,
  searchId,
});

export const loadingSearch = (): types.SearchLoading => ({
  type: types.SearchEnum.SEARCH_LOADING,
});

export const errorSearch = (): types.SearchError => ({
  type: types.SearchEnum.SEARCH_ERROR,
});

export const badSearch = (): types.SearchBad => ({
  type: types.SearchEnum.SEARCH_BAD,
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
        dispatch(successId(resp.data.searchId));
      }
    } catch (error) {
      const err = error as AxiosError;
      const status: number | undefined = err.response?.status;
      if (status === 500) dispatch(badSearch());
      else dispatch(errorSearch());
    }
  };
};
