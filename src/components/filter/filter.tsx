import React from 'react';

import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

import classes from './filter.module.scss';

export const Filter: React.FC = (): JSX.Element => {
  const filter = useTypedSelector((state) => state.filter);
  const [none, one, two, three] = filter;
  const { allFilter, noneFilter, oneFilter, twoFilter, threeFilter } = useActions();

  return (
    <form className={classes.filter} name="filter-form">
      <fieldset className={classes.field}>
        <legend className={classes.title}>Количество пересадок</legend>
        <label htmlFor="all" className={classes.label}>
          <input
            type="checkbox"
            id="all"
            name="all"
            className={classes.input}
            checked={!filter.includes(null)}
            onChange={() => {
              allFilter();
            }}
          />
          Все
        </label>
        <label htmlFor="none" className={classes.label}>
          <input
            type="checkbox"
            id="none"
            name="none"
            className={classes.input}
            checked={none !== null}
            onChange={() => {
              noneFilter();
            }}
          />
          Без пересадок
        </label>
        <label htmlFor="one" className={classes.label}>
          <input
            type="checkbox"
            id="one"
            name="one"
            className={classes.input}
            checked={!!one}
            onChange={() => {
              oneFilter();
            }}
          />
          1 пересадка
        </label>
        <label htmlFor="two" className={classes.label}>
          <input
            type="checkbox"
            id="two"
            name="two"
            className={classes.input}
            checked={!!two}
            onChange={() => {
              twoFilter();
            }}
          />
          2 пересадки
        </label>
        <label htmlFor="three" className={classes.label}>
          <input
            type="checkbox"
            id="three"
            name="three"
            className={classes.input}
            checked={!!three}
            onChange={() => {
              threeFilter();
            }}
          />
          3 пересадки
        </label>
      </fieldset>
    </form>
  );
};
