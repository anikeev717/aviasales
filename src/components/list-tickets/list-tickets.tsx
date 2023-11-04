import type {} from 'redux-thunk/extend-redux';

import { useEffect } from 'react';

import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { Ticket } from '../ticket/ticket';
import { ITicket, Tickets } from '../../types/types';
import { Loader } from '../loader/loader';
import { Message } from '../message/message';
import { getFilterMatch, sortTickets } from '../services/get-final-tickets-functions';
import { getCorrectKey } from '../services/get-correct-key';

import classes from './list-tickets.module.scss';

export const ListTickets: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const {
    searchData: { tickets, stop, loading, error, searchId },
    showCount,
    filter,
    sortStatus,
  } = useTypedSelector((state) => state);

  const { FetchData } = useActions();

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      FetchData(searchId);
    }
  }, [searchId, tickets.length, error]);

  const sortedTickets: Tickets = sortTickets(tickets, sortStatus);
  const filteredTickets: Tickets = sortedTickets.filter((ticket: ITicket) => getFilterMatch(ticket, filter));

  const ticketsElements = filteredTickets.slice(0, showCount).map((ticket: ITicket) => {
    return (
      <li key={getCorrectKey()}>
        <Ticket {...ticket} />
      </li>
    );
  });

  const loader = loading && <Loader />;
  const list = <ul className={classes.tickets}>{ticketsElements}</ul>;
  const message = <Message />;
  const content = (ticketsElements.length && list) || message;

  return (
    <>
      {loader}
      {content}
    </>
  );
};
