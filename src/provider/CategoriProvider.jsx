import { useState } from "react";
import { CategoriContext } from "../contexts/context";
import { useCategori } from "../hooks";
import { convertToSingleWord } from "../utils";

export default function CategoriProvider({ children }) {
  const { data } = useCategori("https://fakestoreapi.com/products/categories");
  // state management
  const [inputValue, setInputValue] = useState(null);
  const [categoriValue, setCategoriValue] = useState({});
  const [emptyCategori, setEmptyCategori] = useState("");
  /* handel function start */
  const handelInputCheckBox = (listen) => {
    const value = listen.target.value;
    const check = listen.target.checked;
    setEmptyCategori(value);
    setInputValue({ value, check });
    setCategoriValue({
      value: convertToSingleWord(value),
      check,
      url: "https://fakestoreapi.com/products/category/",
    });
  };
  /* handel function end */
  return (
    <CategoriContext.Provider
      value={{
        handelInputCheckBox,
        inputValue,
        categoriValue,
        data,
        emptyCategori,
      }}
    >
      {children}
    </CategoriContext.Provider>
  );
}
