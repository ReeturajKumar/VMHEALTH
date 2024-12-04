import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (!res.ok) {
          if (res.status === 401) {
            // Check for specific error codes
            if (result.code === "TOKEN_EXPIRED" || result.code === "INVALID_TOKEN") {
              localStorage.clear(); // Clear local storage
              window.location.href = "/login"; // Redirect to login page
              return; // Exit function early
            }
          }
          throw new Error(result.message || "Failed to fetch data");
        }

        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Ensure loading is false even if an error occurs
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
