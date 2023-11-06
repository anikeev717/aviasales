import logo from '../../assets/images/Logo.svg';

import classes from './logo.module.scss';

export const Logo: React.FC = () => (
  <div className={classes.logo}>
    <img className={classes.logo__image} alt="logo" src={logo} />
  </div>
);
