import { useState } from "react";
import Fetch from "../components/fetch";

function HomePage() {
    const [comingSoon, setComingSoon] = useState([]);
    
    return (
        <>
            <Fetch
                fetchUrl='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                setData={setComingSoon}
            />
        </>
    );
}

export default HomePage;