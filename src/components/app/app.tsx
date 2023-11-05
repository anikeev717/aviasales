import { Provider } from 'react-redux';

import logo from '../../assets/images/Logo.svg';
import { store } from '../../store/index';
import { Sort } from '../sort/sort';
import { List } from '../list/list';
import { Filter } from '../filter/filter';
import { Show } from '../show/show';

import classes from './app.module.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={classes.app}>
        <div className={classes.logo}>
          <img className={classes.logo__image} alt="logo" src={logo} />
        </div>
        <div className={classes.content}>
          <Filter />
          <div className={classes.main}>
            <Sort />
            <List />
            <Show />
          </div>
        </div>
      </div>
    </Provider>
  );
};
