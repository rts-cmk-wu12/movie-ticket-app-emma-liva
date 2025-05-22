import { BsPersonFill } from "react-icons/bs";
import { FaBookmark, FaHouse } from "react-icons/fa6";
import { PiCompassFill } from "react-icons/pi";
import { Link } from "react-router";

function Footer({ current }) {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer-menu">
                    <li><Link to='/'><FaHouse color={current === 'home' ? '#54a8e5' : '#696D74'} className="footer-menu__icon" /></Link></li>
                    <li><Link to='/explore'><PiCompassFill color={current === 'explore' ? '#54a8e5' : '#696D74'} className="footer-menu__icon" /></Link></li>
                    <li><Link to='/bookmark'><FaBookmark color={current === 'bookmark' ? '#54a8e5' : '#696D74'} className="footer-menu__icon" /></Link></li>
                    <li><Link to='/profile'><BsPersonFill color={current === 'profile' ? '#54a8e5' : '#696D74'} className="footer-menu__icon" /></Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;