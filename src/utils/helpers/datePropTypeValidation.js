export const datePropTypeValidation = (props, propName, componentName) => {
  const createdDate = props[propName];
  const date = Date.parse(createdDate);
  if (isNaN(date)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. Expected a Date String.`
    );
  }
};
