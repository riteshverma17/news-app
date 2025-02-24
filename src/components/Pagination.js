import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const Pagination = () => {
    const { page, setPage } = useContext(NewsContext);

    return (
        <div className="flex justify-center space-x-4 py-6">
            <button
                onClick={() => setPage(page - 1)}
                className={`px-4 py-2 bg-gray-800 text-white rounded ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={page === 1}
            >
                Previous
            </button>
            <button
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-gray-800 text-white rounded"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
