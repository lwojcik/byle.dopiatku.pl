import React from 'react';
import classnames from 'classnames/bind';
import styles from './Friday.module.scss';

interface MonthProps {
  day: number;
}

const cx = classnames.bind(styles);

const Friday = ({ day }: MonthProps) => (
  <div className={cx('Friday')}>
    {day}
  </div>
);

export default Friday;
