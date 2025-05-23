import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import FetchMongo from "../components/fetchMongo";
import Header from "../components/header";
import Footer from "../components/footer";

function SavedPlansPage() {
    const [allSavedPlans, setAllSavedPlans] = useState([]);
    const [savedPlans, setSavedPlans] = useState([]);

    const userId = localStorage.getItem('user');

    useEffect(() => {
        setSavedPlans(allSavedPlans?.filter(movie => movie?.owner === userId));
    }, [allSavedPlans, userId]);

    async function removeFromSavedPlan(id) {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/plans/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            setSavedPlans(savedPlans.filter(movie => movie._id !== id));
        } else {
            console.error('Failed to delete the plan');
        }
    }

    return (
        <>
            <FetchMongo
                fetchUrl='/api/plans'
                setData={setAllSavedPlans}
            />
            <Header
                title='saved plans'
                navigateReturn={false}
            />
            <main className="saved-plans">
                {savedPlans.length > 0 ? (
                    savedPlans.map(movie => (
                        <div key={movie._id} className="saved-plans__item">
                            <div className="saved-plans__item-movie">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                                    alt={`${movie.title} poster`}
                                    className="saved-plans__item__poster"
                                />
                                <div>
                                    <p className="saved-plans__item__text saved-plans__item__text--genres">{movie.genres}</p>
                                    <h2 className="saved-plans__item__title">{movie.title}</h2>
                                    <p className="saved-plans__item__text">{movie.runtime}</p>
                                </div>
                                <p className="saved-plans__item__star"><FaStar className="star" />{movie.rating}</p>
                            </div>
                            <div className="saved-plans__item-functions">
                                <Link to={`/select/${movie.title}`} className="saved-plans__item__btn">book ticket</Link>
                                <button
                                    type="button"
                                    onClick={() => removeFromSavedPlan(movie._id)}
                                    className="saved-plans__item__trash"
                                >
                                    <FaTrash color="#FFF" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : <p className="saved-plans__empty">No saved plans found.<br/>Are you logged in?</p>}
            </main>
            <Footer current='bookmark' />
        </>
    );
}

export default SavedPlansPage;