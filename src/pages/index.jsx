import { useEffect, useState } from "react";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import Fetch from "../components/fetch";
import Header from "../components/header";
import Search from "../components/search";
import '../scss/pages/home.scss';
import Footer from "../components/footer";

function HomePage() {
    const [comingSoon, setComingSoon] = useState([]);
    const [cinemas, setCinemas] = useState([]);
    const [processedCinemas, setProcessedCinemas] = useState([]);
    const [popup, setPopup] = useState('welcome');

    useEffect(() => {
        setPopup('welcome active');
        setTimeout(() => {
            setPopup('welcome');
        }, 3000);

        if (cinemas.results?.length > 0) {
            const max = 7.9;
            const min = 4.2;

            const hourMax = 23;
            const hourMin = 20;

            const ratingMax = 5;
            const ratingMin = 3;

            const cinemasWithDetails = cinemas.results.slice(0,10).map(cinema => ({
                ...cinema,
                distance: +(Math.random() * (max - min) + min).toFixed(1),
                closingHour: Math.floor(Math.random() * (hourMax - hourMin + 1)) + hourMin,
                rating: +(Math.random() * (ratingMax - ratingMin) + ratingMin).toFixed(1),
            }));

            cinemasWithDetails.sort((a, b) => a.distance - b.distance);
            setProcessedCinemas({ ...cinemas, results: cinemasWithDetails });
        }
    }, [cinemas.results]);


    return (
        <>
            <Fetch
                fetchUrl='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                setData={setComingSoon}
            />
            <Fetch
                fetchUrl='https://api.themoviedb.org/3/watch/providers/movie?language=en-US'
                setData={setCinemas}
            />
            <Header
                title='TheMoviez'
                navigateReturn={false}
            />
            <Search />
            <div className={popup}>
                <p className="welcome__text">Welcome Back,<span className="welcome__text welcome__text--user">username</span></p>
                <img src="/placeholder.jpg" alt="user-profile" className="welcome__pfp" />
            </div>
            <main className="home">
                <section className="coming-soon">
                    <h2 className="coming-soon__heading">coming soon</h2>
                    <div className="coming-soon__slider">
                        {comingSoon.results?.length > 0 ? (
                            comingSoon.results?.map((movie, index) => (
                                <Link key={index} to={`/details/${movie.id}`}>
                                    <article className="coming-soon__slider__item">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} className="coming-soon__slider__item-poster" />
                                        <h3 className="coming-soon__slider__item-title">{movie.title}</h3>
                                        <p className="coming-soon__slider__item-release">{movie.release_date}</p>
                                    </article>
                                </Link>
                            ))
                        ) : <p>Loading...</p>}
                    </div>
                </section>
                <section className="cinemas">
                    <h2 className="cinemas__heading">cinema near you</h2>
                    <div className="cinemas__list">
                        {processedCinemas.results?.length > 0 ? (
                            processedCinemas.results?.map((cinema, index) => (
                                <article key={index} className="cinemas__list-item">
                                    <img src={`https://image.tmdb.org/t/p/w500${cinema.logo_path}`} alt={`${cinema.provider_name} logo`} className="cinemas__list-item__logo" />
                                    <div className="cinemas__list-item__text">
                                        <p className="cinemas__list-item__distance"><FaLocationDot />{cinema.distance} Kilometers</p>
                                        <h3 className="cinemas__list-item__title">{cinema.provider_name}</h3>
                                        <p className="cinemas__list-item__close">Closes {cinema.closingHour}:00</p>
                                    </div>
                                    <p className="cinemas__list-item__rating"><FaStar className="star" />{cinema.rating}</p>
                                </article>
                            ))
                        ) : <p>Loading...</p>}
                    </div>
                </section>
            </main>
            <Footer current='home' />
        </>
    );
}

export default HomePage;