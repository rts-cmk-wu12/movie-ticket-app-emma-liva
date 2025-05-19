import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import '../scss/components/search.scss';

function Search() {
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        const searchQuery = e.target.searchbar.value.trim();
        if (searchQuery) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Search page doesn't exist yet
        }
    }

    return (
        <form onSubmit={handleSearch} className="form">
            <IoSearch className="form__search-icon" />
            <input type="search" name="searchbar" className="form__search-input" placeholder="Search for your favourite movie" />
        </form>
    );
}

export default Search;