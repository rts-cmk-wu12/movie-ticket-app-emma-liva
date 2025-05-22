import { useEffect } from "react";

function FetchMongo({ setData }) {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/tickets`);
            const data = await response.json();

            setData(data);
        }

        fetchData();
    }, []);
    return null;
}

export default FetchMongo;