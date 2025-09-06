import React, { useEffect, useState } from "react";
import { saveSearchQuery, getSearchHistory } from "../api";

const SearchBar = ({ userId, onSearch }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await getSearchHistory(userId);
      setHistory(res);
    };
    fetchHistory();
  }, [userId]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    await saveSearchQuery(userId, query);
    setHistory([{ query, searchedAt: new Date() }, ...history.slice(0, 9)]);
    onSearch(query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {history.length > 0 && (
        <div>
          <h4>Recent Searches</h4>
          <ul>
            {history.map((h, idx) => (
              <li key={idx} onClick={() => onSearch(h.query)}>
                {h.query}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
