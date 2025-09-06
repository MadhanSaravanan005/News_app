import React, { useState } from "react";
import Navbar from './components/Navbar.jsx';
import NewsBoard from "./src/Components/NewsBoard";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import SavedNews from "./src/components/SavedNews";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [view, setView] = useState("news"); // "news" | "login" | "register" | "saved"

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
      <Navbar setCategory={setCategory} setView={setView} token={token} logout={handleLogout} />
      {view === "news" && <NewsBoard category={category} token={token} />}
      {view === "login" && <Login onLogin={handleLogin} />}
      {view === "register" && <Register onRegister={() => setView("login")} />}
      {view === "saved" && <SavedNews token={token} />}
    </div>
  );
};

export default App;
