import { useEffect, useState } from "react";

const useCategori = (fetchUrl) => {
  const [data, setData] = useState([]);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData(fetchUrl);
  }, [fetchUrl]);
  return {
    data,
  };
};
export default useCategori;
