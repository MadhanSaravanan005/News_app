import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card" style={{ maxWidth: "345px", margin: "10px" }}>
      {src && <img src={src} className="card-img-top" alt="News" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
