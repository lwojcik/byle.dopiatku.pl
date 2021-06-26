type Month =
  1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

const monthDays = (isLeap?: boolean) => [
  31,
  isLeap ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

const getMonthDays = (whichMonth: Month | number, isLeap?: boolean) =>
  monthDays(isLeap)[whichMonth];

export default getMonthDays;
