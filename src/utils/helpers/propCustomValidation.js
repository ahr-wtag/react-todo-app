export const checkDateString = (props, createdTime) => {
  const date = Date.parse(props[createdTime]);
  if (isNaN(date)) {
    return new Error(
      `Invalid prop ${createdTime} supplied. Expected a date string.`
    );
  }
};
