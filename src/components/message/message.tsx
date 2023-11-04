import React from 'react';
import { Alert } from 'antd';

import classes from './message.module.scss';

export const Message: React.FC = () => (
  <div className={classes.message}>
    <Alert
      message="Подсказка"
      description="Для отображения информации выберите хотя бы один фильтр!"
      type="info"
      showIcon
    />
  </div>
);
