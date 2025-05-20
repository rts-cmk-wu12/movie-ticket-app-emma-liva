import { useEffect, useState } from "react";

function SeatPicker({ selectedSeats, setSelectedSeats }) {
    const [disabledSeats, setDisabledSeats] = useState([]);

    // All seat values (Idk if we can get these values dynamically)
    const allSeats = [
        'a1', 'a2', 'a3', 'a4', 'a5', 'a6',
        'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8',
        'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
        'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
        'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8',
        'f1', 'f2', 'f3', 'f4', 'f5', 'f6'
    ];

    useEffect(() => {
        const disabledMax = 12;
        const disabledMin = 3;

        // Randomise the number of seats to be disabled
        const disableRandomiser = Number(
            (Math.random() * (disabledMax - disabledMin) + disabledMin).toFixed(0)
        );

        // Shuffle all of the seats
        const shuffledSeats = [...allSeats].sort(() => 0.5 - Math.random());
        // Select the amount of seats the randomiser generates
        const selectedSeats = shuffledSeats.slice(0, disableRandomiser);
        setDisabledSeats(selectedSeats);
    }, []);

    function selectSeat(e) {
        e.preventDefault();
        // Get the seat which has been clicked
        const clickedSeat = e.nativeEvent.submitter;

        setSelectedSeats(() => {
            if (selectedSeats.includes(clickedSeat.value)) {
                // If the seat already has been saved, remove it
                return selectedSeats.filter(seat => seat !== clickedSeat.value);
            } else {
                // If not, just add it
                return [...selectedSeats, clickedSeat.value];
            }
        });

        // Just the visual for selected seats
        clickedSeat.classList.toggle('saved');
    }

    // Insert the buttons based on the values provided in the rows down below
    function renderButton(seatValue) {
        return (
            <button
                key={seatValue}
                type="submit"
                value={seatValue}
                className="seats__btn"
                disabled={disabledSeats.includes(seatValue)}
            >
                {seatValue}
            </button>
        );
    }

    return (
        <form onSubmit={selectSeat} className="seats">
            <div className="seats__row">
                {['a1','a2','a3','a4','a5','a6'].map(renderButton)}
            </div>
            <div className="seats__row seats__row--long">
                {[
                    'b1','b2','b3','b4','b5','b6','b7','b8',
                    'c1','c2','c3','c4','c5','c6','c7','c8',
                    'd1','d2','d3','d4','d5','d6','d7','d8',
                    'e1','e2','e3','e4','e5','e6','e7','e8'
                ].map(renderButton)}
            </div>
            <div className="seats__row">
                {['f1','f2','f3','f4','f5','f6'].map(renderButton)}
            </div>
        </form>
    );
}

export default SeatPicker;