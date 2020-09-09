import { useState, useEffect } from "react";
import axios from "axios";

export default function useData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(url)
      .then((response) => setData(response.data))
      .catch((error) => alert(error));
  }, []);

  return data;
}
