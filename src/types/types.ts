export type IStateFilter = (number | null)[];

export enum FilterTypes {
  FILTER_ALL = 'FILTER_ALL',
  FILTER_NONE = 'FILTER_NONE',
  FILTER_ONE = 'FILTER_ONE',
  FILTER_TWO = 'FILTER_TWO',
  FILTER_THREE = 'FILTER_THREE',
}
export interface FilterAll {
  type: FilterTypes.FILTER_ALL;
}
export interface FilterNone {
  type: FilterTypes.FILTER_NONE;
}
export interface FilterOne {
  type: FilterTypes.FILTER_ONE;
}
export interface FilterTwo {
  type: FilterTypes.FILTER_TWO;
}
export interface FilterThree {
  type: FilterTypes.FILTER_THREE;
}

export type FilterAction = FilterAll | FilterNone | FilterOne | FilterTwo | FilterThree;

export enum SortTypes {
  SORT_PRICE = 'SORT_PRICE',
  SORT_SPEED = 'SORT_SPEED',
}

export interface SortPrice {
  type: SortTypes.SORT_PRICE;
}

export interface SortSpeed {
  type: SortTypes.SORT_SPEED;
}

export type SortAction = SortPrice | SortSpeed;

export type IStateShowCount = number;

export enum ShowType {
  SHOW_MORE = 'SHOW_MORE',
}

export interface ShowAction {
  type: ShowType.SHOW_MORE;
}
export type Tickets = ITicket[] | [];

export interface IStateSearchData {
  searchId: string;
  tickets: Tickets;
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

export enum SearchTypes {
  SEARCH_SUCCESS_TICKETS = 'SEARCH_SUCCESS_TICKETS',
  SEARCH_SUCCESS_ID = 'SEARCH_SUCCESS_ID',
  SEARCH_LOADING = 'SEARCH_LOADING',
  SEARCH_ERROR = 'SEARCH_ERROR',
}

export interface SearchSuccessTickets extends Omit<IStateSearchData, 'loading' | 'error' | 'searchId'> {
  type: SearchTypes.SEARCH_SUCCESS_TICKETS;
}

export interface SearchSuccessId extends Omit<IStateSearchData, 'loading' | 'error' | 'tickets' | 'stop'> {
  type: SearchTypes.SEARCH_SUCCESS_ID;
}

export interface SearchLoading {
  type: SearchTypes.SEARCH_LOADING;
}

export interface SearchError {
  type: SearchTypes.SEARCH_ERROR;
}

export type SearchAction = SearchSuccessTickets | SearchSuccessId | SearchLoading | SearchError;
