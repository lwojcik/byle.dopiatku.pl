import React from 'react';
import './Calendar.module.scss';
import getMonthDays from '../../helpers/getMonthDays/getMonthDays';
// import getMonthDays from '../../helpers/getMonthDays/getMonthDays';
import isLeapYear from '../../helpers/isLeapYear/isLeapYear';
// import getMonthDays from '../../helpers/getMonthDays/getMonthDays';

interface CalendarProps {
  year: number;
  month: number;
  day: number;
  firstFriday: number;
}

const getYear = (year: number, firstFriday: number) => {
  const leapYear = isLeapYear(year);
  let remainder = firstFriday;
  let lastFridayOfPreviousMonth;
  let daysOfPreviousMonth;
  let yearArray = new Array(12);

  for (let i = 0; i <= 11; i++) {
    const monthDays = getMonthDays(i, leapYear);
    yearArray[i] = [];

    if (i === 0) {
      remainder = firstFriday;
    } else {
      lastFridayOfPreviousMonth = yearArray[i-1].slice(-1)[0];
      daysOfPreviousMonth = getMonthDays(i-1, leapYear);
      remainder = (lastFridayOfPreviousMonth - daysOfPreviousMonth) + 7;
    }

    for (let j = remainder; j <= monthDays; j += 7) {
      yearArray[i].push(j);
    }
  }

  return yearArray;
}

const Calendar = ({ year, month, day, firstFriday }: CalendarProps) => (
  <>
    <p>{year} {month} {day} {firstFriday}</p>
    <div>{JSON.stringify(getYear(year, firstFriday))}</div>
  </>
);

export default Calendar;
