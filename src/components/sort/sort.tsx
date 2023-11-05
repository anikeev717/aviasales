import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';
import { SortEnum } from '../../types/types';

import classes from './sort.module.scss';

export const Sort: React.FC = () => {
  const sortStatus = useTypedSelector((state) => state.sortStatus);

  const { priceSort, speedSort } = useActions();

  return (
    <form className={classes.form} name="sort-form">
      <button
        className={sortStatus === SortEnum.SORT_PRICE ? `${classes.button} ${classes.active}` : `${classes.button}`}
        type="button"
        onClick={() => priceSort()}
      >
        Самый дешевый
      </button>
      <button
        className={sortStatus === SortEnum.SORT_SPEED ? `${classes.button} ${classes.active}` : `${classes.button}`}
        type="button"
        onClick={() => speedSort()}
      >
        Самый быстрый
      </button>
    </form>
  );
};
