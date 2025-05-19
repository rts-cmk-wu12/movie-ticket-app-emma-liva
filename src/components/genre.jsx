import { useEffect, useState } from "react";


function Genre({ ids }) {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        async function fetchGenres() {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const URL = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API_KEY}`
                }
            };

            const response = await fetch(URL, options);
            const data = await response.json();

            setGenre(data.genres);
        }
        fetchGenres();
    }, []);

    const getGenreIds = (genreIds) => {
        return genreIds.map((id) => {
            const genreItem = genre.find((gen) => gen.id === id);
            return genreItem ? genreItem.name : "";
        });
    };

    return (
        <ul>
            {getGenreIds(ids).map((g, index) => (
                <li key={index}>{g}</li>
            ))}
        </ul>
    );
}

export default Genre;
