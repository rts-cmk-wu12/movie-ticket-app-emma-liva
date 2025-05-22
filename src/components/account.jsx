import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { FaTrash } from "react-icons/fa6";
import { HiBell } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniTicket } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";

function Account() {
    return (  
        <>
          <div className="profile">
                <div className="profile__container">
                    <img src="/placeholder.jpg" alt="Profile-img" />
                    <p>Username</p>
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
                    <p>Deactivate Account</p>
                    <button><IoIosArrowForward /></button>
                </div>
            </section>
            <section className="profile profile--last">
                <h2>Privacy & Policy</h2>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--dark-blue"><HiBell /></div>
                    <p>Notifications</p>
                    <button><IoIosArrowForward /></button>
                </div>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--blue"><HiMiniTicket /></div>
                    <p>Your Tickets</p>
                    <button><IoIosArrowForward /></button>
                </div>
                <div className="profile__container">
                    <div className="profile__container__icon profile__container__icon--red"><IoLogOut /></div>
                    <p>Logout</p>
                    <button><IoIosArrowForward /></button>
                </div>
            </section>
        </>
    );
}

export default Account;