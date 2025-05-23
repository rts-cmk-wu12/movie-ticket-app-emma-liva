
function ConfirmPopup({ title, message, confirmBtn, show, onCancel, onConfirm }) {
    
    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    }

    return (
        <>
            <div className={show ? 'active popupConfirmOverlay' : 'popupConfirmOverlay'}>
                <div className={show ? 'active confirm-popup' : 'confirm-popup'}>
                    <h2 className="confirm-popup__title">{title}</h2>
                    <p className="confirm-popup__message">{message}</p>
                    <div className="confirm-popup__buttons">
                        <button className="confirm-popup__buttons__confirm" onClick={handleConfirm}>{confirmBtn}</button>
                        <button className="confirm-popup__buttons__cancel" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConfirmPopup;