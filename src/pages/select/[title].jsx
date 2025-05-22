import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/header";
import Fetch from "../../components/fetch";
import RandomDate from "../../components/random-date";
import RandomTime from "../../components/random-time";
import SeatPicker from "../../components/seatPicker";

function SelectSeat() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [cinemas, setCinemas] = useState([]);
    const [error, setError] = useState(false);
    const { title } = useParams();
    const navigate = useNavigate();

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const dayMax = 10;
    const dayMin = 1;

    function createRandomDate() {
        let targetMonth = currentMonth;
        let targetDay = currentDay + Math.floor(Math.random() * dayMax) + dayMin;

        // Get days in current month
        const daysInMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();

        // If the target day exceeds current month's days, proceed to the next month
        if (targetDay > daysInMonth) {
            targetMonth = currentMonth + 1;
            // Adjust the day to be the difference (If we're 2 days over, it becomes the 2nd of the next month)
            targetDay = targetDay - daysInMonth;

            // If the next month exceeds 12, reset to January (Though we never adress what year it is...)
            if (targetMonth > 12) {
                targetMonth = 1;
            }
        }

        return `${targetDay}/${targetMonth}`;
    }

    const hourMax = 22;
    const hourMin = 8;

    function createRandomTime() {
        return Math.floor(Math.random() * (hourMax - hourMin + 1)) + hourMin;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;

        if (selectedSeats.length < 1) {
            setError(true);
            return;
        }

        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        navigate(`/checkout/${selectedSeats.length}`);
        setError(false);

        await fetch(`${import.meta.env.VITE_URL}/api/tickets/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formDataObject, selectedSeats, title }),
        });
    }

    return (
        <>
            <Header
                navigateReturn={true}
                title="Select Seats"
                search={false}
            />

            <main className="select">
                <Fetch
                    fetchUrl='https://api.themoviedb.org/3/watch/providers/movie?language=en-US'
                    setData={setCinemas}
                />
                <form className="select-seats" onSubmit={handleSubmit}>
                    <div className="select-seats__cinema">
                        <label htmlFor="cinema" className="select-seats__label">Cinema</label>
                        <select name="cinema" id="cinema" className="select-seats__select">
                            {cinemas?.results?.slice(0, 10).map(cinema => (
                                <option key={cinema.provider_id} value={cinema.provider_name}>{cinema.provider_name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date" className="select-seats__label">Date</label>
                        <select name="date" id="date" className="select-seats__select">
                            <RandomDate date={createRandomDate()} />
                            <RandomDate date={createRandomDate()} />
                            <RandomDate date={createRandomDate()} />
                            <RandomDate date={createRandomDate()} />
                        </select>
                    </div>

                    <div>
                        <label htmlFor="time" className="select-seats__label">Time</label>
                        <select name="time" id="time" className="select-seats__select">
                            <RandomTime time={createRandomTime()} />
                            <RandomTime time={createRandomTime()} />
                            <RandomTime time={createRandomTime()} />
                        </select>
                    </div>
                    <button type="submit" className="select-seats__btn">checkout</button>
                </form>
                <SeatPicker selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                <div className="showcase">
                    <p className="showcase__text"><span className="showcase__dot showcase__dot--selected"></span>selected</p>
                    <p className="showcase__text"><span className="showcase__dot showcase__dot--reserved"></span>reserved</p>
                    <p className="showcase__text"><span className="showcase__dot showcase__dot--available"></span>available</p>
                </div>
                {error && <p className="error">Please select at least one seat.</p>}
            </main>
        </>
    );
}

export default SelectSeat;