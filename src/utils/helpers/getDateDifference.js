export const getDateDifference = (from) => {
  let date = new Date(from);
  let currentDate = new Date("2023-05-28");
  let differenceInTime = currentDate.getTime() - date.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;
  return Math.max(Math.round(differenceInDays), 1);
};
