import React, { useState } from "react";
import Navbar from "./comp/Navbar.jsx";
import NewsBoard from "./comp/NewsBoard.jsx";
import Login from "./comp/Login.jsx";
import Register from "./comp/Register.jsx";
import SavedNews from "./comp/SavedNews.jsx";
import Preferences from "./comp/Preferences.jsx";
import SearchBar from "./comp/SearchBar.jsx";
import Subscriptions from "./comp/Subscriptions.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [view, setView] = useState("news"); 
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    setView("news");
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setView("login");
  };

  return (
    <div>
      {/* Navbar always visible */}
      <Navbar setCategory={setCategory} setView={setView} token={token} logout={handleLogout} />

      {/* Show SearchBar only when logged in and viewing news */}
      {token && view === "news" && (
        <div className="container mt-3">
          <SearchBar userId={token} onSearch={(q) => setSearchQuery(q)} />
        </div>
      )}

      {/* Page views */}
      {view === "news" && <NewsBoard category={category} token={token} query={searchQuery} />}
      {view === "login" && <Login onLogin={handleLogin} />}
      {view === "register" && <Register onRegister={() => setView("login")} />}
      {view === "saved" && <SavedNews token={token} />}
      {view === "preferences" && <Preferences userId={token} />}
      {view === "subscriptions" && <Subscriptions userId={token} />}
    </div>
  );
};

export default App;
