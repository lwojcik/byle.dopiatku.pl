import React from 'react';
import classnames from 'classnames/bind';
import { translate } from 'react-i18nify';
import MonthRow from '../MonthRow/MonthRow';
import FridayRow from '../FridayRow/FridayRow';
import Month from '../Month/Month';
import Friday from '../Friday/Friday';
import styles from './Calendar.module.scss';
import getYearArray from '../../helpers/getYearArray/getYearArray';

interface CalendarProps {
  year: number;
  month: number;
  day: number;
  firstFriday: number;
}

const cx = classnames.bind(styles);

const Calendar = ({ year, month, day, firstFriday }: CalendarProps) => {
  const fridays = getYearArray(year, firstFriday);
  const months = Object.values(translate('months'));

  return (
    <div className={cx('Calendar')}>
      <MonthRow months={months}>
        {((month, i) => (
          <div className={cx('row')}>
            <Month name={month} />
            <div>
              <FridayRow fridays={fridays[i]}>
                {(day) => (
                  <Friday day={day} />
                )}
              </FridayRow>
            </div>
          </div>
        ))}
      </MonthRow>
    </div>
  );
};

export default Calendar;
