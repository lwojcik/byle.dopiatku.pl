import React from 'react';
import './Calendar.module.scss';
import getYearArray from '../../helpers/getYearArray/getYearArray';

interface CalendarProps {
  year: number;
  month: number;
  day: number;
  firstFriday: number;
}

const Calendar = ({ year, month, day, firstFriday }: CalendarProps) => (
  <>
    <p>{year} {month} {day} {firstFriday}</p>
    <div>{JSON.stringify(getYearArray(year, firstFriday))}</div>
  </>
);

export default Calendar;
