import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsCard from "./NewsCard";

const NewsList = () => {
    const { articles } = useContext(NewsContext);

    return (
        <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
