import { createContext, useState, useEffect } from "react";
import axios from "axios";





export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState("general");
    const [page, setPage] = useState(1);
    const pageSize = 6;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=0f98f4edb25b47d69a9a8507589a6ab8`
                );
                setArticles(res.data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, [category, page]);

    return (
        <NewsContext.Provider value={{ articles, category, setCategory, page, setPage }}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
