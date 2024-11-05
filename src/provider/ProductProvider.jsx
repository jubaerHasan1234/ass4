import { useEffect, useReducer, useState } from "react";
import { ProductContext } from "../contexts/context";
import { useDebounc, useFetch } from "../hooks";
import cardReducer from "../reducer/cardReducer";
import productReducer from "../reducer/productReducer";
import { allSort, searchFilterResult } from "../utils";

export default function ProductProvider({ children }) {
  /* fetch  all product start */
  const {
    loading,
    error,
    data: productAll,
  } = useFetch("https://fakestoreapi.com/products", 2000);

  /* fetch  all product end */
  /* state manegment start */
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const [sortData, setSortData] = useState("");
  const [data, dispatch] = useReducer(productReducer, []);
  const [card, cardDispatch] = useReducer(cardReducer, []);
  /* state manegment end */
  const doSearch = useDebounc((searchValue) => {
    setDebounceSearch(searchValue);
  }, 500);
  // console.log(card);

  /* handel function start */
  const handelSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    doSearch(value);
  };
  const handelLowToHigh = (order) => {
    setSortData([...allSort(data, order)]);
  };
  const handelHighToLow = (order) => {
    setSortData([...allSort(data, order)]);
  };

  /* handel function end */
  /* search effect start */
  useEffect(() => {
    dispatch({ type: "sort", data: sortData });
  }, [sortData]);
  useEffect(() => {
    const serachResult = searchFilterResult(productAll, debounceSearch);
    if (debounceSearch) {
      dispatch({ type: "search", serachResult });
    } else {
      dispatch({ type: "search", serachResult });
    }
  }, [debounceSearch, productAll]);

  /* search effect end */
  return (
    <ProductContext.Provider
      value={{
        loading,
        error,
        data,
        handelSearch,
        search,
        dispatch,
        handelHighToLow,
        handelLowToHigh,
        card,
        cardDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
