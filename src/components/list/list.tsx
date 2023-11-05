import type {} from 'redux-thunk/extend-redux';
import { useEffect } from 'react';

import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { Ticket } from '../ticket/ticket';
import { ITicket } from '../../types/types';
import { Loader } from '../loader/loader';
import { Message } from '../message/message';
import { targetTickets } from '../services/get-target-tickets';
import { getCorrectKey } from '../services/get-correct-key';

import classes from './list.module.scss';

export const List: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const showCount = useTypedSelector((state) => state.showCount);
  const sortStatus = useTypedSelector((state) => state.sortStatus);
  const filter = useTypedSelector((state) => state.filter);
  const { tickets, stop, loading, error, searchId } = useTypedSelector((state) => state.searchData);

  const { FetchData } = useActions();

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      FetchData(searchId);
    }
  }, [searchId, tickets, error]);

  const ticketsElements = targetTickets(tickets, sortStatus, filter, showCount).map((ticket: ITicket) => {
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
