import { useState } from "react";
import { Link } from "react-router";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Fetch from "./fetch";

function StarRating() {
    const [topMovies, setTopMovies] = useState([]);

    const getStars = (rating) => {
        const stars = rating / 2;
        const roundedStars = Math.round(stars * 2) / 2;

        const fullStars = Math.floor(roundedStars);
        const hasHalfStar = roundedStars % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="star-rating">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="star" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="star" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="star" />
                ))}
            </div>
        );
    };

    return (
        <div className="explore__section__list">
            <Fetch
                fetchUrl='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
                setData={setTopMovies}
            />
            {topMovies.results?.map((movie) => (
                <Link key={movie.id} to={`/details/${movie.id}`}>
                    <div className="explore__section__list__item">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        {getStars(movie.vote_average)}
                    </div>
                </Link>
            ))}

        </div>
    );
}

export default StarRating;