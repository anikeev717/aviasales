export type TFilter = (number | null)[];

export enum FilterEnum {
  FILTER_ALL = 'FILTER_ALL',
  FILTER_NONE = 'FILTER_NONE',
  FILTER_ONE = 'FILTER_ONE',
  FILTER_TWO = 'FILTER_TWO',
  FILTER_THREE = 'FILTER_THREE',
}
export interface FilterAll {
  type: FilterEnum.FILTER_ALL;
}
export interface FilterNone {
  type: FilterEnum.FILTER_NONE;
}
export interface FilterOne {
  type: FilterEnum.FILTER_ONE;
}
export interface FilterTwo {
  type: FilterEnum.FILTER_TWO;
}
export interface FilterThree {
  type: FilterEnum.FILTER_THREE;
}

export type FilterAction = FilterAll | FilterNone | FilterOne | FilterTwo | FilterThree;

export enum SortEnum {
  SORT_PRICE = 'SORT_PRICE',
  SORT_SPEED = 'SORT_SPEED',
}

export interface SortPrice {
  type: SortEnum.SORT_PRICE;
}

export interface SortSpeed {
  type: SortEnum.SORT_SPEED;
}

export type SortAction = SortPrice | SortSpeed;

export type IShow = number;

export enum ShowEnum {
  SHOW_MORE = 'SHOW_MORE',
}

export interface ShowAction {
  type: ShowEnum.SHOW_MORE;
}
export type TTickets = ITicket[] | [];

export interface ISearch {
  searchId: string;
  tickets: TTickets;
  stop: boolean;
  loading: boolean;
  error: boolean;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

export enum SearchEnum {
  SEARCH_SUCCESS_TICKETS = 'SEARCH_SUCCESS_TICKETS',
  SEARCH_SUCCESS_ID = 'SEARCH_SUCCESS_ID',
  SEARCH_LOADING = 'SEARCH_LOADING',
  SEARCH_ERROR = 'SEARCH_ERROR',
}

export interface SearchSuccessTickets extends Omit<ISearch, 'loading' | 'error' | 'searchId'> {
  type: SearchEnum.SEARCH_SUCCESS_TICKETS;
}

export interface SearchSuccessId extends Omit<ISearch, 'loading' | 'error' | 'tickets' | 'stop'> {
  type: SearchEnum.SEARCH_SUCCESS_ID;
}

export interface SearchLoading {
  type: SearchEnum.SEARCH_LOADING;
}

export interface SearchError {
  type: SearchEnum.SEARCH_ERROR;
}

export type SearchAction = SearchSuccessTickets | SearchSuccessId | SearchLoading | SearchError;
