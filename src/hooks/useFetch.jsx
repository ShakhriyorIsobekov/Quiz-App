import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        console.log("Fetched data:", data);
        setData(data.quizzes);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}
