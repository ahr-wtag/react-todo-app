export const getDateDifference = (from) => {
  let date = new Date(from);
  let to = new Date();
  let Difference_In_Time = to.getTime() - date.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.max(Math.round(Difference_In_Days), 1);
};
