import { useState } from "react";
import Fetch from "./fetch";

function Genre({ ids }) {
    const [genre, setGenre] = useState([]);

    function getGenreIds(genreIds) {
        return genreIds.map((id) => {
            const genreItem = genre?.genres?.find((gen) => gen.id === id);
            return genreItem ? genreItem.name : "";
        });
    };

    return (
        <>
            <Fetch
                fetchUrl='https://api.themoviedb.org/3/genre/movie/list?language=en-US'
                setData={setGenre}
            />
            <ul>
                {getGenreIds(ids).map((g, index) => (
                    <li key={index}>{g}</li>
                ))}
            </ul>
        </>
    );
}

export default Genre;