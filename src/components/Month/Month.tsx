import React from 'react';
import classnames from 'classnames/bind';
import styles from './Month.module.scss';

interface MonthProps {
  name: string;
}

const cx = classnames.bind(styles);

const Month = ({ name }: MonthProps) => (
  <div className={cx('Month')}>
    {name}
  </div>
);

export default Month;
