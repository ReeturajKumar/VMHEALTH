import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.msg || "An error occurred while fetching data");
        }

        if (isMounted) {
          setData(result.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setLoading(false);
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
