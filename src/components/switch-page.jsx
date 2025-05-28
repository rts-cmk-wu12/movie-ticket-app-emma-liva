import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function SwitchPage({ seeAllMovies, currentPage, setCurrentPage }) {
    return (
        <div className="pagination">
            <button
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination__button"
            ><FaAngleLeft /></button>
            <p className="pagination__indicator">{seeAllMovies.page} / {seeAllMovies.total_pages}</p>
            <button
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= seeAllMovies.total_pages}
                className="pagination__button"
            ><FaAngleRight /></button>
        </div>
    );
}

export default SwitchPage;