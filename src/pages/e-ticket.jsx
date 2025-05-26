import { useState } from "react";
import { MdSimCardDownload } from "react-icons/md";
import Header from "../components/header";
import Popup from "../components/popup";
import ETicket from "../components/eTicket";

function ETicketPage() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <Header title='e-ticket' />
            <main className="e-ticket">
                <h2 className="e-ticket__heading">instruction</h2>
                <p className="e-ticket__text">Come to the cinema, show and scan the barcode to the space provided. Continue to comply with health protocols.</p>
                <ETicket />
                <button type="button" className="e-ticket__btn" onClick={() => setShowPopup(true)}>download e-ticket</button>
            </main>
            <Popup
                title='Your ticket has been downloaded'
                description='You can find your ticket in the downloads folder'
                buttonText='Back To Home'
                link='/'
                icon={<MdSimCardDownload />}
                show={showPopup}
            />
        </>
    );
}

export default ETicketPage;