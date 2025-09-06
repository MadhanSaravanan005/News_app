import React from "react";
import { saveBookmark } from "../api";

const NewsItem = ({ article, token }) => {
  const handleSave = async () => {
    if (!token) {
      alert("Login to save bookmarks");
      return;
    }
    await saveBookmark(token, {
      title: article.title,
      url: article.url,
      imageUrl: article.urlToImage,
      description: article.description,
      source: article.source.name,
      publishedAt: article.publishedAt,
    });
    alert("Article saved!");
  };

  return (
    <div className="card mb-3">
      <img
        src={article.urlToImage || "https://via.placeholder.com/150"}
        alt={article.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
          Read more
        </a>
        <button className="btn btn-warning" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
