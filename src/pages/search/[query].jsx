import { useState } from "react";
import { Link, useParams } from "react-router";
import Fetch from "../../components/fetch";
import Header from "../../components/header";
import Genre from "../../components/Genre";
import Search from "../../components/search";
import Footer from "../../components/footer";




function SearchPage() {
    const [search, setSearch] = useState([]);
    const { query } = useParams();

    /*     useEffect(()=>{
            async function fetchQueries() {
                const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
                const FETCH_URL = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
                const fetchOptions = {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${API_KEY}`
                    }
                }
    
                const response = await fetch(FETCH_URL, fetchOptions);
                const data = await response.json();
    
                setSearch(data);
                
            }
    
            fetchQueries();
        }, [query]) */




    return (
        <>
            <Header
                title="Search movie"
            />
            <main>
                <Search />

                <div className="upcoming__section__list">
                    <Fetch
                        fetchUrl={`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`}
                        setData={setSearch}
                    />
                    {search.results?.length > 0 ? (
                        search.results?.map((movie) => (
                            <Link key={movie.id} to={`/details/${movie.id}`}>
                                <div key={movie.id} className="upcoming__section__list__item">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <div className="upcoming__section__list__item__info">
                                        <h3>{movie.title}</h3>
                                        <p><span>Release Date:</span> <br />{movie.release_date}</p>
                                        <Genre ids={movie.genre_ids} />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : <p className="upcoming__section__list__noResults">No results found...</p>}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SearchPage;