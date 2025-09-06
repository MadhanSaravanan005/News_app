import React, { useEffect, useState } from "react";
import { fetchBookmarks } from "../api";

const SavedNews = ({ token }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const load = async () => {
      if (!token) return;
      const res = await fetchBookmarks(token);
      setBookmarks(res);
    };
    load();
  }, [token]);

  return (
    <div className="container mt-4">
      <h3>Your Saved Articles</h3>
      <div className="row">
        {bookmarks.map((b, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-3">
              <img
                src={b.imageUrl || "https://via.placeholder.com/150"}
                alt={b.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5>{b.title}</h5>
                <p>{b.description}</p>
                <a href={b.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedNews;
