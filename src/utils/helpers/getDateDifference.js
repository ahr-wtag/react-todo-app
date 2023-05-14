import moment from "moment";

export const getDateDifference = (from) => {
  const startDate = moment(from);
  const endDate = moment();
  const diffInDays = endDate.diff(startDate, "days");
  return Math.max(diffInDays, 1);
};
