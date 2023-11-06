import { useEffect } from 'react';

import { Logo } from '../logo/logo';
import { Content } from '../content/content';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

import classes from './app.module.scss';

export const App: React.FC = () => {
  const { tickets, stop, badResponse, searchId } = useTypedSelector((state) => state.searchData);
  const { FetchData } = useActions();

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      FetchData(searchId);
    }
  }, [searchId, tickets, badResponse]);

  return (
    <div className={classes.app}>
      <Logo />
      <Content />
    </div>
  );
};
