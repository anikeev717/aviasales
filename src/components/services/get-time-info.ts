import { format, add } from 'date-fns';

import { getRange } from './get-range';

const getTime = (date: Date | number): string => format(date, 'HH:mm');

const getTimeAfterTime = (time: Date | number, duration: number): string => getTime(add(time, { minutes: duration }));

const getDurationTime = (duration: number): string => getTimeAfterTime(-10800000, duration);

export const getTimeInfo = (time: Date | number, duration: number): [string, string] => {
  const term = getRange(getTime(time), getTimeAfterTime(time, duration));
  return [term, getDurationTime(duration)];
};
