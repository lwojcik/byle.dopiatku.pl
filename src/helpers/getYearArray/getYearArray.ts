import isLeapYear from 'helpers/isLeapYear/isLeapYear';
import getMonthDays from 'helpers/getMonthDays/getMonthDays';
import { Month } from 'types';

const calculateRemainder = (yearArray: number[][], i: Month, isLeapYear: boolean) => {
  const monthIndex = i - 1 as Month;
  const lastFridayOfPreviousMonth = yearArray[monthIndex].slice(-1)[0] as Month;
  const daysOfPreviousMonth = getMonthDays(monthIndex, isLeapYear);
  return (lastFridayOfPreviousMonth - daysOfPreviousMonth) + 7;
}

const getYearArray = (year: number, firstFriday: number) => {
  const leapYear = isLeapYear(year);
  let yearArray = new Array(12);

  for (let i = 0; i <= 11; i++) {
    const monthDays = getMonthDays(i as Month, leapYear);
    yearArray[i] = [];
    const remainder = i === 0
      ? firstFriday
      : calculateRemainder(yearArray, i as Month, leapYear);

    for (let j = remainder; j <= monthDays; j += 7) {
      yearArray[i].push(j);
    }
  }

  return yearArray as number[][];
}

export default getYearArray;
