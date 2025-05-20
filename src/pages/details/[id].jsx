import { useState } from "react";
import { Link, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import Fetch from "../../components/fetch";
import Header from "../../components/header";

function DetailsPage() {
    const [details, setDetails] = useState({})
    const { id } = useParams();

    const director = details.credits?.crew?.find(crew => crew.job === 'Director');
    const runTimeInHours = details.runtime / 60;
    const hours = Math.floor(runTimeInHours);
    const minutes = Math.round((runTimeInHours - hours) * 60);

    return (
        <>
            <Header
                title="Details movie"
                bookmark={true}
            />
            <main>
                <Fetch
                    fetchUrl={`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`}
                    setData={setDetails}
                />
                <div key={details.id} className="details">
                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
                    <h2>{details.title}</h2>
                    <div className="details__info">
                        <p className="details__info__director">Director: {director?.name}</p>
                        <p className="details__info-divide">|</p>
                        <p><FaStar className="star" /> {details.vote_average}</p>
                    </div>
                    <div className="details__info">
                        <p>{`${hours}h ${minutes}m`}</p>
                        <p className="details__info-divide">|</p>
                        <p>Release Date: {details.release_date}</p>

                    </div>
                    <ul className="details__genres">
                        {details.genres?.map((genre, index) => (
                            <li key={genre.id || index}>{genre.name}</li>
                        ))}
                    </ul>
                    <h2>Synopsis</h2>
                    <p>{details.overview}</p>
                    <Link to={`/selectSeats`} ><button>Book Ticket</button></Link>
                </div>
            </main>
        </>
    );
}

export default DetailsPage;