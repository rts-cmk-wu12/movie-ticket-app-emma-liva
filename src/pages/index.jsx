import { useEffect, useState } from "react";
import Fetch from "../components/fetch";
import Header from "../components/header";
import Search from "../components/search";
import '../scss/components/user-popup.scss';

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
        </>
    );
}

export default HomePage;