import { useState, useEffect } from "react";
import { fetchUserData, fetchFolderData } from "../util/GetApi.jsx";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataByType = async () => {
      try {
        let fetchedData;
        if (url === "user") {
          fetchedData = await fetchUserData();
        } else if (url === "folder") {
          fetchedData = await fetchFolderData();
        }
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataByType();
  }, [url]);

  return [data];
}

export default useFetch;
