import React, { useEffect, useState } from "react";
import { fetchNews } from "../api";

const NewsBoard = ({ category, token, onSaveArticle }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchNews(category, page);
        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [category, page]);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="container mt-4">
      <h3>News - {category}</h3>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {articles.map((article, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card h-100">
              <img
                src={article.urlToImage || "https://via.placeholder.com/150"}
                alt={article.title}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                
                <div className="mt-auto d-flex justify-content-between">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => onSaveArticle && onSaveArticle(article)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {articles.length > 0 && (
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-secondary" onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <span>Page {page}</span>
          <button className="btn btn-secondary" onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
