import { ITicket, IStateFilter, Tickets, SortTypes } from '../../types/types';

export const getFilterMatch = (currentTicket: ITicket, currentFilter: IStateFilter): boolean => {
  const stopsCountArr = currentTicket.segments.map((segment) => segment.stops.length);
  return stopsCountArr.every((stops: number) => currentFilter.includes(stops));
};

const getDurationSummary = (currentTicket: ITicket): number => {
  const stopsCountArr = currentTicket.segments.map((segment) => segment.duration);
  return stopsCountArr.reduce((acc, el) => acc + el, 0);
};

export const sortTickets = (currentTickets: Tickets, currentSortType: SortTypes): Tickets => {
  const sortedTickets = currentTickets.slice();
  return currentSortType === SortTypes.SORT_PRICE
    ? sortedTickets.sort((prev, next) => prev.price - next.price)
    : sortedTickets.sort((prev, next) => getDurationSummary(prev) - getDurationSummary(next));
};
