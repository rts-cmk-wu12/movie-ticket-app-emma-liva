import { useEffect } from "react";

function Fetch({ fetchUrl, setData }) {
    useEffect(() => {
        async function fetchData() {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const fetchOptions = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API_KEY}`
                }
            }

            const response = await fetch(fetchUrl, fetchOptions);
            const data = await response.json();

            setData(data.results);
        }

        fetchData();
    }, [fetchUrl]);
}

export default Fetch;