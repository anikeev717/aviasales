import type {} from 'redux-thunk/extend-redux';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { Ticket } from '../ticket/ticket';
import { ITicket } from '../../types/types';
import { Loader } from '../loader/loader';
import { Message } from '../message/message';
import { ErrorMessage } from '../error/error';
import { targetTickets } from '../services/get-target-tickets';
import { getCorrectKey } from '../services/get-correct-key';

import classes from './list.module.scss';

export const List: React.FC = () => {
  const showCount = useTypedSelector((state) => state.showCount);
  const sortStatus = useTypedSelector((state) => state.sortStatus);
  const filter = useTypedSelector((state) => state.filter);
  const { tickets, loading, error } = useTypedSelector((state) => state.searchData);

  const ticketsElements = targetTickets(tickets, sortStatus, filter, showCount).map((ticket: ITicket) => {
    return (
      <li key={getCorrectKey()}>
        <Ticket {...ticket} />
      </li>
    );
  });

  const loader = loading && <Loader />;
  const list = <ul className={classes.tickets}>{ticketsElements}</ul>;
  const message = (error && <ErrorMessage />) || <Message />;
  const content = (!error && ticketsElements.length && list) || message;

  return (
    <>
      {loader}
      {content}
    </>
  );
};
