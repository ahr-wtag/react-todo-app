import { useDispatch } from "react-redux";
import { loadingState } from "store/actions";

export function debounce(func, delay) {
  let timeoutId;
  const dispatch = useDispatch();
  return function (...args) {
    clearTimeout(timeoutId);
    dispatch(loadingState());
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
    dispatch(loadingState());
  };
}
