import isLeapYear from '../isLeapYear/isLeapYear';
import getMonthDays from '../getMonthDays/getMonthDays';

const calculateRemainder = (yearArray: number[][], i: number, isLeapYear: boolean) => {
  const lastFridayOfPreviousMonth = yearArray[i-1].slice(-1)[0];
  const daysOfPreviousMonth = getMonthDays(i-1, isLeapYear);
  return (lastFridayOfPreviousMonth - daysOfPreviousMonth) + 7;
}

const getYearArray = (year: number, firstFriday: number) => {
  const leapYear = isLeapYear(year);
  let yearArray = new Array(12);

  for (let i = 0; i <= 11; i++) {
    const monthDays = getMonthDays(i, leapYear);
    yearArray[i] = [];
    const remainder = i === 0
     ? firstFriday
     : calculateRemainder(yearArray, i, leapYear);

    for (let j = remainder; j <= monthDays; j += 7) {
      yearArray[i].push(j);
    }
  }

  return yearArray;
}

export default getYearArray;
