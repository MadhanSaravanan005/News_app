import React from "react";

const Navbar = ({ setCategory, setView, token, logout }) => {
  const categories = ["general", "business", "technology", "entertainment", "sports", "health"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#" onClick={() => setView("news")}>
        NewsApp
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {categories.map((cat) => (
            <li className="nav-item" key={cat}>
              <a
                href="#"
                className="nav-link"
                onClick={() => setCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <ul className="navbar-nav ms-auto">
          {token ? (
            <>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setView("saved")}>
                  Saved
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setView("preferences")}>
                  Preferences
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setView("subscriptions")}>
                  Subscriptions
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={logout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setView("login")}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => setView("register")}>
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
