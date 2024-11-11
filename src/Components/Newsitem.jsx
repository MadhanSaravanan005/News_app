// src/Components/Newsitem.jsx
import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card mb-4">
      <img
        src={src || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
