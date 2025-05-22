import { useState } from "react";
import FetchMongo from "./fetchMongo";

function ETicket() {
    const [ticketData, setTicketData] = useState([]);
    
    
    return (
        <>
            <FetchMongo
                setData={setTicketData}
            />
            
            <div className="eticket">
                {ticketData.length > 0 ? (
                    ticketData.map(ticket => (
                        <>
                            <table key={ticket._id} className="eticket__top">
                                <thead>
                                    <tr>
                                        <th>Film:</th>
                                        <th>e-ticket</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                        <td>{ticket.time}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment</th>
                                        <td>Succesfull</td>
                                    </tr>
                                    <tr>
                                        <th>Order</th>
                                        <td>{ticket._id}</td>
                                    </tr>
                                </tbody>

                            </table>
                            <div className="eticket__bottom">
                                <div >
                                    {/* <!-- insert your custom barcode setting your data in the GET parameter "data" --> */}
                                    <img alt='Barcode Generator TEC-IT'
                                        src={`https://barcode.tec-it.com/barcode.ashx?data=${ticket._id}`} />
                                </div>
                                <div >
                                    {/* <!-- back-linking to www.tec-it.com is required --> */}
                                    <a href='https://www.tec-it.com' title='Barcode Software by TEC-IT' target='_blank'></a>
                                </div>
                            </div>
                        </>
                    )

                )) : <p> No tickets found</p>}
            </div>
        </>
    );
}

export default ETicket;