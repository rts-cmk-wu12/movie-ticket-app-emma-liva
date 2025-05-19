import { useEffect, useState } from "react";
import Fetch from "../components/fetch";
import Header from "../components/header";
import Search from "../components/search";
import '../scss/components/user-popup.scss';
import '../scss/components/coming-soon.scss';

function HomePage() {
    const [comingSoon, setComingSoon] = useState([]);
    const [popup, setPopup] = useState('welcome');

    useEffect(() => {
        setPopup('welcome active');
        setTimeout(() => {
            setPopup('welcome');
        }, 3000);
    }, []);

    return (
        <>
            <Fetch
                fetchUrl='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                setData={setComingSoon}
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
                        {comingSoon.length > 0 ? (
                            comingSoon.map((movie, index) => (
                                <article key={index} className="coming-soon__slider__item">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} className="coming-soon__slider__item-poster" />
                                    <h3 className="coming-soon__slider__item-title">{movie.title}</h3>
                                    <p className="coming-soon__slider__item-release">{movie.release_date}</p>
                                </article>
                            ))
                        ) : <p>Loading...</p>}
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;