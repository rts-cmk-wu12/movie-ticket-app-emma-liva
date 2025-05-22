import { Link } from "react-router";

function Popup({ title, description, buttonText, icon, link, show }) {
    return (  
        <>
            <div className={show ? 'active popupOverlay' : 'popupOverlay'}>
                <div className={show ? 'active popup' : 'popup'}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="popup__icon">
                        {icon}
                    </div>
                    <Link to={link} className="popup__button">{buttonText}</Link>
                </div>
            </div>
        </>
    );
}

export default Popup;