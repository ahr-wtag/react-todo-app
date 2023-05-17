export const debounce = (func) => {
  let timeoutId;
  return function (...args) {
    timeoutId && clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, 500);
  };
};
