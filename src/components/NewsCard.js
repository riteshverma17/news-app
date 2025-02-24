import React from "react";

const NewsCard = ({ article }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover" />}
            <div className="p-4">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                <a href={article.url} className="text-blue-500 mt-3 inline-block" target="_blank" rel="noopener noreferrer">
                    Read More →
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
