import { Fragment, ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './MonthRow.module.sass';

interface MonthRowProps {
  months: string[];
  children: (month: string, i: number) => ReactElement;
}

const cx = classnames.bind(styles);

const MonthRow = ({ months, children }: MonthRowProps) => (
  <div className={cx('MonthRow')}>
    {months.map((month, i) => (
      <Fragment key={i}>
        {children(month, i)}
      </Fragment>
    ))}
  </div>
);

export default MonthRow;
