// src/App.jsx
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Components/styles.css'; // Corrected the import statement for the CSS file

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
};

export default App;
