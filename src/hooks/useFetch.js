import { useContext, useEffect, useState } from "react";
import { CategoriContext } from "../contexts/context";

const useFetch = (fetchUrl, delay) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoriValue } = useContext(CategoriContext);

  const fetchData = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetching data data faild: ${response.status}`);
        }
        return response.json();
      })
      .then((productData) => {
        setData(productData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    let setTimeOutId;
    if (categoriValue.check) {
      setLoading(true);
      setTimeOutId = setTimeout(() => {
        fetchData(`${categoriValue.url}${categoriValue.value}`);
      }, delay);
    } else {
      setLoading(true);
      setTimeOutId = setTimeout(() => {
        fetchData(fetchUrl);
      }, delay);
    }

    return () => clearTimeout(setTimeOutId);
  }, [fetchUrl, delay, categoriValue]);

  return {
    loading,
    error,
    data,
  };
};
export default useFetch;
