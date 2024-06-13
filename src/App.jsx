import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Components/styles.css";

const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div className="alert alert-info">
      <Navbar  setCategory={setCategory}/>
      <Newsboard category={category} />
    </div>
  );
};

export default App;
