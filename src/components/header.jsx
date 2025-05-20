import { FaAngleLeft, FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import '../scss/components/header.scss';

function Header({ title, navigateReturn = true, toPage = -1, search = false, bookmark = false }) {
    const navigate = useNavigate();

    return (
        <header className="header">
            {navigateReturn && <FaAngleLeft color='#FFF' onClick={() => navigate(toPage)} className="header__left" />}
            <h1 className="header__title">{title}</h1>
            {search && <IoSearch color="#FFF" className="header__right" />}
            {bookmark && <FaRegBookmark color="#FFF" className="header__right" />}
        </header>
    );
}

export default Header;