import { differenceInDays } from "date-fns";

export const getDateDifference = (from) => {
  const startDate = new Date(from);
  const endDate = new Date();
  const diffInDays = differenceInDays(endDate, startDate);
  return Math.max(diffInDays, 1);
};
