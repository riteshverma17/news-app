import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];

const Navbar = () => {
    const { setCategory } = useContext(NewsContext);

    return (
        <nav className="bg-blue-600 text-white py-4 justify-center">
           
            <div className="container mx-auto flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition"
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
