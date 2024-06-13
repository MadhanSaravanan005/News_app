import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log('API Key:', apiKey); // Log the API key to the console
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching the news articles:", error);
        setError(error.message);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <div className="text-center text-danger">Failed to load articles: {error}</div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {articles.map((news, index) => (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Newsboard;
