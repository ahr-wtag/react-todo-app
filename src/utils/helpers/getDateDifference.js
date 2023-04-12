export const getDateDifference = (from) => {
  let date = new Date(from);
  let currentDate = new Date();
  let differenceInTime = currentDate.getTime() - date.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return Math.max(Math.round(differenceInDays), 1);
};
