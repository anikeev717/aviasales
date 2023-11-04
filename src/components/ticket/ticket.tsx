import { ITicket } from '../../types/types';
import { getFormatTime, getDurationTime } from '../services/get-time-functions';
import { getStopsTitle } from '../services/get-stops-title';

import classes from './ticket.module.scss';

export const Ticket: React.FC<ITicket> = ({ price, carrier, segments }) => {
  const SegmentsItems = segments.map((segment) => {
    const { date, duration, stops } = segment;

    const targetDate = new Date(date);
    const departureTime = getFormatTime(targetDate);
    const arrivalTime = getDurationTime(targetDate, duration);
    const pureDuration = getDurationTime(-10800000, duration);

    const stopsTitle = getStopsTitle(stops.length);
    const stopsDescription: string = stops.join(', ');

    return (
      <div className={classes.line} key={targetDate.getTime()}>
        <div className={classes.field}>
          <span className={classes.title}>MOV - HKT</span>
          <span className={classes.description}>{`${departureTime} - ${arrivalTime}`}</span>
        </div>
        <div className={classes.field}>
          <span className={classes.title}>В пути</span>
          <span className={classes.description}>{pureDuration}</span>
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
        <span className={classes.price}>{price}</span>
        <img className={classes.image} src={`//pics.avs.io/99/36/${carrier}.png`} alt="ticket-logo" />
      </div>
      <div className={classes.info}>{SegmentsItems}</div>
    </div>
  );
};
