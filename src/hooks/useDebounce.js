import { useEffect, useRef } from "react";

const useDebounc = (callback, delay) => {
  const timeId = useRef(null);
  useEffect(() => {
    if (timeId.current) {
      clearTimeout(timeId.current);
    }
  }, []);
  const debounceCallback = (searchValue) => {
    if (timeId.current) {
      clearTimeout(timeId.current);
    }
    timeId.current = setTimeout(() => {
      callback(searchValue);
    }, delay);
  };
  return debounceCallback;
};

export default useDebounc;
