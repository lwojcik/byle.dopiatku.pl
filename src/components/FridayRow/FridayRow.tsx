import React, { Fragment, ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './FridayRow.module.scss';

interface FridayRowProps {
  fridays: number[];
  children: (friday: number, i: number) => ReactElement;
}

const cx = classnames.bind(styles);

const FridayRow = ({ fridays, children }: FridayRowProps) => (
  <div className={cx('FridayRow')}>
    {fridays.map((friday, i) => (
      <Fragment key={i}>
        {children(friday, i)}
      </Fragment>
    ))}
  </div>
);

export default FridayRow;
