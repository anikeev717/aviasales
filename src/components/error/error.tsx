import React from 'react';
import { Alert } from 'antd';

import classes from './error.module.scss';

export const ErrorMessage: React.FC = () => (
  <div className={classes.message}>
    <Alert message="Ошибка" description="Произошла ошибка!" type="error" showIcon />
  </div>
);
