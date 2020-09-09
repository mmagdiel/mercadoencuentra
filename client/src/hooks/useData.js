import { useState, useEffect } from "react";
import axios from "axios";

export default function useData(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => alert(error));
  }, [url]);
  return data;
}

/*
{
    const getFetch = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    getFetch();
  }

*/
