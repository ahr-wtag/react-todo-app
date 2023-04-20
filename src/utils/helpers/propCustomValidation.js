import { isValid } from "date-fns";

export const checkDateString = (props, createdTime) => {
  let date = props[createdTime];
  if (!isValid(date)) {
    return new Error(
      `Invalid prop ${createdTime} supplied. Expected a date string.`
    );
  }
};
