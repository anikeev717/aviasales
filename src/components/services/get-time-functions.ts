import { format, add } from 'date-fns';

export const getFormatTime = (date: Date | number): string => format(date, 'HH:mm');

export const getDurationTime = (time: Date | number, duration: number): string =>
  getFormatTime(add(time, { minutes: duration }));
