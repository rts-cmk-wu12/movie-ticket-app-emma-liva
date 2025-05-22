import { useState } from "react";
import FetchMongo from "./fetchMongo";

function ETicket() {
    const [ticketData, setTicketData] = useState([]);

    // shorten _id to 7 characters
    const shortenId = (id) => {
        return id.slice(0, 7);
    }


    return (
        <>
            <FetchMongo
                setData={setTicketData}
            />

            <div className="eticket">
                {ticketData.length > 0 ? (
                    ticketData.map(ticket => (
                        <div key={ticket._id} className="eticket__item">
                            <table className="eticket__item__top">
                                <tbody>
                                    <tr>
                                        <th className="black">Film: {ticket.title}</th>
                                    </tr>
                                    <tr>
                                        <th className="red">e-ticket</th>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td>{ticket.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Seats</th>
                                        <td>{ticket.selectedSeats}</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>{ticket.cinema}</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>{ticket.time}:00</td>
                                    </tr>
                                    <tr>
                                        <th>Payment</th>
                                        <td>Succesfull</td>
                                    </tr>
                                    <tr>
                                        <th>Order</th>
                                        <td>{shortenId(ticket._id)}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="eticket__item__bottom">
                                {/* <!-- insert your custom barcode setting your data in the GET parameter "data" --> */}
                                <img alt='Barcode Generator TEC-IT'
                                    src={`https://barcode.tec-it.com/barcode.ashx?data=${shortenId(ticket._id)}`} 
                                />
                                <div className="eticket__item__bottom__left"></div>
                                <div className="eticket__item__bottom__right"></div>
                            </div>
                        </div>
                    )

                    )) : <p> No tickets found</p>}
            </div>
        </>
    );
}

export default ETicket;