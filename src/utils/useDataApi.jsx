import { useState, useEffect } from "react";
import axios from "axios";
const useDataApi = (url) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      const cardRes = res?.data?.products;
      if (cardRes) {
        console.log(cardRes);
        setProduct(cardRes);
      } else {
        console.log("no Data found");
      }
    } catch (error) {
      console.log("Error while fetching the data");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    product,
    error,
    loading,
  };
};

export default useDataApi;
