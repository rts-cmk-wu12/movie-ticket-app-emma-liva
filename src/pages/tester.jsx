import { useState } from "react";
import ConfirmPopup from "../components/confirmPopup";


function Tester() {
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    function handleConfirm() {
        console.log("Confirmed!");
        // Additional confirmation logic here
    };

    return (
        <>
        <button 
            type="button"
            onClick={() => setShowConfirmPopup(true)}
        >Tester</button>
        <ConfirmPopup 
            title="Test Title"
            message="This is a test message."
            cancelBtn="Cancel"
            confirmBtn="Confirm"
            show={showConfirmPopup}
            onCancel={() => setShowConfirmPopup(false)}
            onConfirm={handleConfirm}
        />
        </>

    )
}

export default Tester;