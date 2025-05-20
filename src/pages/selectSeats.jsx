import { useState } from "react";
import Header from "../components/header";
import SeatPicker from "../components/seatPicker";
import '../scss/pages/seats.scss';

function SelectSeat() {
    const [selectedSeats, setSelectedSeats] = useState([]);

    return (
        <>
            <Header
                navigateReturn={true}
                title="Select Seat"
                search={false}
            />

            <main>
                <form action="select-seats">
                    <label htmlFor="cinema">Cinema</label>
                    <select name="cinema" id="cinema">
                        <option value="cinema1">Cinema 1</option>
                        <option value="cinema2">Cinema 2</option>
                        <option value="cinema3">Cinema 3</option>
                    </select>

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />

                    <label htmlFor="time">Time</label>
                    <select name="time" id="time">
                        <option value="8">08:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="15.30">15:30</option>
                        <option value="18">18:00</option>
                        <option value="20">20:00</option>
                        <option value="22">22:00</option>
                    </select>
                </form>
                <SeatPicker selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
            </main>
        </>
    );
}

export default SelectSeat;