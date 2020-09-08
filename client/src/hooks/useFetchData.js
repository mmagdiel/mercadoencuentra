import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((myData) => setData(myData));
  }, []);

  return data;
};

export default useFetchData;
