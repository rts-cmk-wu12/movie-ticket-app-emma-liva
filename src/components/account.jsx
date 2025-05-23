import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { FaTrash } from "react-icons/fa6";
import { HiBell } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniTicket } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import FetchMongo from "./fetchMongo";
import ConfirmPopup from "./confirmPopup";

function Account({ userId }) {
    const [user, setUser] = useState({});
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('user');
        setShowLogoutPopup(false);
        navigate('/');
    };
    
    async function handleDeleteAccount() {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            localStorage.removeItem('user');
            setShowDeletePopup(false);
            navigate('/');

        }
    };

    return (
        <>
            <FetchMongo
                fetchUrl={`/api/users/${userId}`}
                setData={setUser}
            />
            <div className="profile">
                <div className="profile__container">
                    <img src="/placeholder.jpg" alt="Profile-img" />
                    <p>{user.username}</p>
                    <button><IoIosArrowForward /></button>
                </div>
            </div>
            <section className="profile">
                <h2>Account</h2>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--dark-blue"><BiSolidBarChartAlt2 /></div>
                    <p>Personal Data</p>
                    <button><IoIosArrowForward /></button>
                </div>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--blue"><TiUserAdd /></div>
                    <p>Email & Payment</p>
                    <button><IoIosArrowForward /></button>
                </div>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--red"><FaTrash /></div>
                    <p>Delete Account</p>
                    <button onClick={() => setShowDeletePopup(true)}><IoIosArrowForward /></button>
                </div>
            </section>
            <section className="profile profile--last">
                <h2>Privacy & Policy</h2>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--dark-blue"><HiBell /></div>
                    <p>Notifications</p>
                    <button><IoIosArrowForward /></button>
                </div>
                <Link to="/e-ticket"><div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--blue"><HiMiniTicket /></div>
                    <p>Your Tickets</p>
                    <button><IoIosArrowForward /></button>
                </div></Link>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--red"><IoLogOut /></div>
                    <p>Logout</p>
                    <button onClick={() => setShowLogoutPopup(true)}><IoIosArrowForward /></button>
                </div>
            </section>
            <ConfirmPopup
                title="Logout"
                message="You are about to log out. Are you sure?"
                confirmBtn="Logout"
                show={showLogoutPopup}
                onCancel={() => setShowLogoutPopup(false)}
                onConfirm={handleLogout}
            />
            <ConfirmPopup
                title="Delete Account"
                message="You are about to permanently delete your account. Are you sure?"
                confirmBtn="Delete"
                show={showDeletePopup}
                onCancel={() => setShowDeletePopup(false)}
                onConfirm={handleDeleteAccount}
            />
        </>
    );
}

export default Account;