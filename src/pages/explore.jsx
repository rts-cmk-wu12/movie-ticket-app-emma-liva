import { useState } from "react";
import Fetch from "../components/fetch";
import Header from "../components/header";
import Genre from "../components/Genre";
import ChangeContent from "../components/changeContent";

function Explore() {
    const [topMovies, setTopMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [activeTab, setActiveTab] = useState('nowShowing'); // Default to Now Showing

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Header
                navigateReturn={false}
                title="Explore movie"
                search={true}
            />
            <main>
                <ChangeContent 
                    onTabChange={handleTabChange}
                />
                
                {/* Now Showing Content */}
                <div className="explore" style={{ display: activeTab === 'nowShowing' ? 'block' : 'none' }}>
                    <section className="explore__section">
                        <div className="explore__section__header">
                            <h2>Top Movies</h2>
                            <button type="button">See more</button>
                        </div>
                        <div className="explore__section__list">
                            <Fetch
                                fetchUrl='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
                                setData={setTopMovies}
                            />
                            {topMovies.map((movie) => (
                                <div key={movie.id} className="explore__section__list__item">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <h3>{movie.title}</h3>
                                    <p>{movie.vote_average}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="explore__section">
                        <div className="explore__section__header">
                            <h2>Recommended</h2>
                            <button type="button">See more</button>
                        </div>
                        <div className="explore__section__list">
                            <Fetch
                                fetchUrl='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
                                setData={setRecommendedMovies}
                            />
                            {recommendedMovies.map((movie) => (
                                <div key={movie.id} className="explore__section__list__item">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <h3>{movie.title}</h3>
                                    <Genre ids={movie.genre_ids} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                
                {/* Upcoming Content */}
                <section 
                    className="upcoming__section" 
                    style={{ display: activeTab === 'upcoming' ? 'block' : 'none' }}
                >
                    <h2>Upcoming</h2>
                    <div className="upcoming__section__list">
                        <Fetch
                            fetchUrl='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                            setData={setUpcomingMovies}
                        />
                        {upcomingMovies.map((movie) => (
                            <div key={movie.id} className="upcoming__section__list__item">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <div className="upcoming__section__list__item__info">
                                    <h3>{movie.title}</h3>
                                    <p><span>Release Date:</span> <br />{movie.release_date}</p>
                                    <Genre ids={movie.genre_ids} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Explore;