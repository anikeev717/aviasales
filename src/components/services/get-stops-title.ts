export const getStopsTitle = (stopsLength: number): string => {
  switch (stopsLength) {
    case 0:
      return 'Без пересадок';
    case 1:
      return '1 пересадка';
    default:
      return `${stopsLength} пересадки`;
  }
};
