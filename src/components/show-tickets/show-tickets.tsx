import { useActions } from '../../hooks/use-actions';

import classes from './show-tickets.module.scss';

export const ShowTickets: React.FC = () => {
  const { showMore } = useActions();
  return (
    <form className={classes.form} name="fetch-form">
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          showMore();
        }}
      >
        Показать еще 5 билетов
      </button>
    </form>
  );
};
