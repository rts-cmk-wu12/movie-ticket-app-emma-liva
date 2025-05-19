import { useState } from "react";
import Fetch from "../components/fetch";

function Explore() {
    const [topMovies, setTopMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    return (
        <main className="explore">
            <section className="explore__top-movies">
                    <div className="explore__top-movies__header">
                        <h2>Top Movies</h2>
                        <button>See more</button>
                    </div>
                <div className="explore__top-movies__list">
                    <Fetch
                        fetchUrl= 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
                        setData={setTopMovies}
                    />
                    {topMovies.map((movie) => (
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.vote_average}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="explore__recommended-movies">
                <div className="explore__recommended-movies__header">
                    <h2>Recommended</h2>
                    <button>See more</button>
                </div>
                <div className="explore__recommended-movies__list">
                    <Fetch
                        fetchUrl='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' 
                        setData={setTopMovies}
                    />
                    {recommendedMovies.map((movie) => (
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.genre_ids}</p>
                        </div>
                    ))}
       
                </div>
            </section>

        </main>
    );
}

export default Explore;