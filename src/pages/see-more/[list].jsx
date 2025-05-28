import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Fetch from "../../components/fetch";
import Genre from "../../components/genre";
import SwitchPage from "../../components/switch-page";

function SeeMore() {
    const [seeAllMovies, setSeeAllMovies] = useState([]);
    const [seeMoreMovies, setSeeMoreMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { list } = useParams();

    useEffect(() => {
        if (list === 'top movies') {
            setSeeMoreMovies(seeAllMovies.results?.sort((a, b) => b.vote_average - a.vote_average));
        } else if (list === 'recommended') {
            setSeeMoreMovies(seeAllMovies.results);
        }
    }, [list, seeAllMovies]);

    return (
        <>
            <Header
                title={list}
            />
            <main className="see-more">
                <SwitchPage
                    seeAllMovies={seeAllMovies}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <div className="upcoming__section__list">
                    <Fetch
                        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`}
                        setData={setSeeAllMovies}
                    />
                    {seeMoreMovies?.length > 0 ? (
                        seeMoreMovies?.map((movie) => (
                            <Link key={movie.id} to={`/details/${movie.id}`}>
                                <div key={movie.id} className="upcoming__section__list__item">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <div className="upcoming__section__list__item__info">
                                        <h2>{movie.title}</h2>
                                        <p><span>Release Date:</span> <br />{movie.release_date}</p>
                                        <Genre ids={movie.genre_ids} />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : <p>Loading...</p>}
                </div>
                <SwitchPage
                    seeAllMovies={seeAllMovies}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </main>
        </>
    );
}

export default SeeMore;