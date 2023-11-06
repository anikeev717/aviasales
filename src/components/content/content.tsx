import { Filter } from '../filter/filter';
import { List } from '../list/list';
import { Show } from '../show/show';
import { Sort } from '../sort/sort';

import classes from './content.module.scss';

export const Content: React.FC = () => (
  <div className={classes.content}>
    <Filter />
    <div className={classes.main}>
      <Sort />
      <List />
      <Show />
    </div>
  </div>
);
