export const getDateDifference = (from) => {
  const MILLISECONDS_PER_SECOND = 1000;
  const SECONDS_PER_HOUR = 3600;
  const HOURS_PER_DAY = 24;

  const MILLISECONDS_PER_DAY =
    MILLISECONDS_PER_SECOND * SECONDS_PER_HOUR * HOURS_PER_DAY;

  let date = new Date(from);
  let currentDate = new Date();
  let differenceInTime = currentDate.getTime() - date.getTime();
  let differenceInDays = differenceInTime / MILLISECONDS_PER_DAY + 1;
  return Math.max(Math.round(differenceInDays), 1);
};
