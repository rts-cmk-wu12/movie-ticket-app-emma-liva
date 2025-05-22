import { useState } from "react";
import Popup from "../components/popup";
import { RiShieldCheckFill } from "react-icons/ri";

function Tester() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <button onClick={() => setShowPopup(true)}>Show Popup</button>
            <Popup
                title='Your payment was successful'
                description='Refund will only be given if the ticket is cancelled 1 hour before the movie starts.'
                buttonText='See E-Ticket'
                link='/e-ticket'
                icon={<RiShieldCheckFill />}
                show={showPopup}
            />
        </>

    )
}

export default Tester;