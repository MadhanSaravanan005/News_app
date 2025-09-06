// src/Components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for news..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
