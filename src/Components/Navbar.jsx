// src/Components/Navbar.jsx
import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">NewsApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {["general", "business", "technology", "entertainment", "sports", "health"].map((category) => (
            <li className="nav-item" key={category}>
              <a
                className="nav-link"
                onClick={() => setCategory(category)}
                href="#"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
