import { useState, useEffect } from "react";
import fetchData from "../util/GetApi.jsx";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(url)
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error(error));
  }, [url]);

  return [data];
}

export default useFetch;
