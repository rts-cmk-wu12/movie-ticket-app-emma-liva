import { useEffect, useState } from "react";
import { FaAngleLeft, FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import FetchMongo from "./fetchMongo";
import ConfirmPopup from "./confirmPopup";

function Header({ title, navigateReturn = true, toPage = -1, search = false, bookmark = false, bookmarkData, showSearch, setShowSearch }) {
    const [savedBookmarks, setSavedBookmarks] = useState([]);
    const [bookmarked, setBookmarked] = useState(false);
    const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem('user');

    const movieExists = savedBookmarks.some(movie => movie?.id === bookmarkData?.id);

    useEffect(() => {
        setBookmarked(movieExists);
    }, [movieExists]);

    async function addToPlans() {
        if (movieExists) {
            return;
        }

        setBookmarked(true);
        await fetch(`${import.meta.env.VITE_URL}/api/plans/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...bookmarkData, owner: userId }),
        });
    }

    function moveToLogin() {
        setShowCheckoutPopup(false);
        navigate('/profile');
    };

    return (
        <>
            <FetchMongo
                fetchUrl={'/api/plans'}
                setData={setSavedBookmarks}
            />

            <header className="header">
                {navigateReturn && <FaAngleLeft color='#FFF' onClick={() => navigate(toPage)} className="header__left" />}
                <h1 className="header__title">{title}</h1>
                {search && <IoSearch
                    color="#FFF"
                    className="header__right"
                    onClick={() => {
                        setShowSearch(!showSearch);
                    }}
                />}
                {bookmark && <FaRegBookmark
                    color={bookmarked ? '#54a8e5' : '#FFF'}
                    className="header__right"
                    onClick={() => {
                        if (userId) {
                            addToPlans();
                            setBookmarked(true);
                        } else {
                            setShowCheckoutPopup(true);
                        }
                    }} />}
            </header>
            <ConfirmPopup
                title="Not Logged In"
                message="To use this feature, please log in."
                confirmBtn="Login"
                show={showCheckoutPopup}
                onCancel={() => setShowCheckoutPopup(false)}
                onConfirm={moveToLogin}
            />
        </>
    );
}

export default Header;