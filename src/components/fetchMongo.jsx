import { useEffect } from "react";

function FetchMongo({ fetchUrl, setData }) {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(fetchUrl);
            const data = await response.json();

            setData(data);
        }

        fetchData();
    }, [fetchUrl]);
}

export default FetchMongo;