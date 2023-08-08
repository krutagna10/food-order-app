import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
}

export default useFetch;
