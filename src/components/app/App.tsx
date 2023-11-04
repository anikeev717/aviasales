import { Provider } from 'react-redux';

import logo from '../../assets/images/Logo.svg';
import { SortTickets } from '../sort-tickets/sort-tickets';
import { store } from '../../store/index';
import { ListTickets } from '../list-tickets/list-tickets';
import { FilterTickets } from '../filter-tickets/filter-tickets';
import { ShowTickets } from '../show-tickets/show-tickets';

import classes from './app.module.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={classes.app}>
        <div className={classes.logo}>
          <img className={classes.logo__image} alt="logo" src={logo} />
        </div>
        <div className={classes.content}>
          <FilterTickets />
          <div className={classes.main}>
            <SortTickets />
            <ListTickets />
            <ShowTickets />
          </div>
        </div>
      </div>
    </Provider>
  );
};
