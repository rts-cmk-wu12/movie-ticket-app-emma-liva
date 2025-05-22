import { useEffect } from "react";

function FetchMongo({ fetchUrl, setData }) {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${import.meta.env.VITE_URL}${fetchUrl}`);
            const data = await response.json();

            setData(data);
        }

        fetchData();
    }, [fetchUrl]);
    
    return null;
}

export default FetchMongo;