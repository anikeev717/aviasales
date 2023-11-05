import { ITicket } from '../../types/types';
import { getTimeInfo } from '../services/get-time-info';
import { getStopsTitle } from '../services/get-stops-title';
import { getRange } from '../services/get-range';
import { getFormatPrice } from '../services/get-format-price';

import classes from './ticket.module.scss';

export const Ticket: React.FC<ITicket> = ({ price, carrier, segments }) => {
  const targetPrice = getFormatPrice(price);
  const SegmentsItems = segments.map((segment) => {
    const { date, duration, stops, origin, destination } = segment;

    const targetDate = new Date(date);
    const [term, durationTime] = getTimeInfo(targetDate, duration);
    const route = getRange(origin, destination);
    const stopsTitle = getStopsTitle(stops.length);
    const stopsDescription: string = stops.join(', ');

    return (
      <div className={classes.line} key={targetDate.getTime()}>
        <div className={classes.field}>
          <span className={classes.title}>{route}</span>
          <span className={classes.description}>{term}</span>
        </div>
        <div className={classes.field}>
          <span className={classes.title}>В пути</span>
          <span className={classes.description}>{durationTime}</span>
        </div>
        <div className={classes.field}>
          <span className={classes.title}>{stopsTitle}</span>
          <span className={classes.description}>{stopsDescription}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <span className={classes.price}>{targetPrice}</span>
        <img className={classes.image} src={`//pics.avs.io/99/36/${carrier}.png`} alt="ticket-logo" />
      </div>
      <div className={classes.info}>{SegmentsItems}</div>
    </div>
  );
};

Ticket.defaultProps = {
  price: 0,
  carrier: 'W6',
  segments: [
    {
      origin: 'From',
      destination: 'To',
      date: '2024-01-01T00:00:00.000Z',
      stops: [],
      duration: 0,
    },
    {
      origin: 'From',
      destination: 'To',
      date: '2024-01-01T00:00:00.000Z',
      stops: [],
      duration: 0,
    },
  ],
} satisfies ITicket;
