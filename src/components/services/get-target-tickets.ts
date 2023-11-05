import { ITicket, TFilter, TTickets, SortEnum } from '../../types/types';

const getFilterMatch = (currentTicket: ITicket, currentFilter: TFilter): boolean => {
  const stopsCountArr = currentTicket.segments.map((segment) => segment.stops.length);
  return stopsCountArr.every((stops: number) => currentFilter.includes(stops));
};

const getDurationSummary = (currentTicket: ITicket): number => {
  const stopsCountArr = currentTicket.segments.map((segment) => segment.duration);
  return stopsCountArr.reduce((acc, el) => acc + el, 0);
};

const sortTickets = (currentTickets: TTickets, currentSortType: SortEnum): TTickets => {
  const sortedTickets = currentTickets.slice();
  return currentSortType === SortEnum.SORT_PRICE
    ? sortedTickets.sort((prev, next) => prev.price - next.price)
    : sortedTickets.sort((prev, next) => getDurationSummary(prev) - getDurationSummary(next));
};

export const targetTickets = (tickets: TTickets, sortStatus: SortEnum, filter: TFilter, showCount: number) => {
  const sortedTickets: TTickets = sortTickets(tickets, sortStatus);
  const filteredTickets: TTickets = sortedTickets.filter((ticket: ITicket) => getFilterMatch(ticket, filter));
  return filteredTickets.slice(0, showCount);
};
