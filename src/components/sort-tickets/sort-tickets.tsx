import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';
import { SortTypes } from '../../types/types';

import classes from './sort-tickets.module.scss';

export const SortTickets: React.FC = () => {
  const sortStatus = useTypedSelector((state) => state.sortStatus);

  const { priceSort, speedSort } = useActions();

  return (
    <form className={classes.form} name="sort-form">
      <button
        className={sortStatus === SortTypes.SORT_PRICE ? `${classes.button} ${classes.active}` : `${classes.button}`}
        type="button"
        onClick={() => priceSort()}
      >
        Самый дешевый
      </button>
      <button
        className={sortStatus === SortTypes.SORT_SPEED ? `${classes.button} ${classes.active}` : `${classes.button}`}
        type="button"
        onClick={() => speedSort()}
      >
        Самый быстрый
      </button>
    </form>
  );
};
