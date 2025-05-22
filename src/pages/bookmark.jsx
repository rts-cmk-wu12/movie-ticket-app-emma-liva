import { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import FetchMongo from "../components/fetchMongo";
import Header from "../components/header";

function SavedPlansPage() {
    const [savedPlans, setSavedPlans] = useState([]);

    console.log(savedPlans);

    return (
        <>
            <FetchMongo
                fetchUrl='/api/plans'
                setData={setSavedPlans}
            />
            <Header title='saved plans' />
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
                                <div className="saved-plans__item-info">
                                    <p className="saved-plans__item__text saved-plans__item__text--genres">{movie.genres}</p>
                                    <h2 className="saved-plans__item__title">{movie.title}</h2>
                                    <p className="saved-plans__item__text">{movie.runtime}</p>
                                </div>
                                <p className="saved-plans__item__star"><FaStar className="star" />{movie.rating}</p>
                            </div>
                            <div className="saved-plans__item-functions">
                                <Link to={`/select/${movie.id}`} className="saved-plans__item__btn">book ticket</Link>
                                <button type="button" className="saved-plans__item__trash"><FaTrash color="#FFF" /></button>
                            </div>
                        </div>
                    ))
                ) : <p>No saved plans</p>}
            </main>
        </>
    );
}

export default SavedPlansPage;