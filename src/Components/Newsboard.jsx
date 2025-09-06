// src/Components/Newsboard.jsx
import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const articlesPerPage = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${articlesPerPage}`;

      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalResults / articlesPerPage));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.error("Error fetching the news articles:", error);
      }
    };

    fetchArticles();
  }, [category, currentPage]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="text-center mt-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <SearchBar setSearchQuery={setSearchQuery} />

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : error ? (
        <div className="text-center text-danger">Failed to load articles: {error}</div>
      ) : (
        <div className="row">
          {filteredArticles.map((news, index) => (
            <div className="col-md-4" key={index}>
              <Newsitem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Newsboard;
