// frontend/src/api.js
// Use environment variable for backend URL, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ================== NEWS ==================
export const fetchNews = async (category, page, query = "") => {
  const res = await fetch(
    `${API_URL}/news?category=${category}&page=${page}&q=${query}`
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
};

// ================== AUTH ==================
export const loginUser = async (username, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

// ================== BOOKMARKS ==================
export const saveBookmark = async (token, article) => {
  const res = await fetch(`${API_URL}/bookmarks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(article),
  });
  return res.json();
};

export const fetchBookmarks = async (token) => {
  const res = await fetch(`${API_URL}/bookmarks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

// ================== PREFERENCES ==================
export const savePreferences = async (token, categories) => {
  const res = await fetch(`${API_URL}/preferences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ categories }),
  });
  return res.json();
};

export const getPreferences = async (token) => {
  const res = await fetch(`${API_URL}/preferences`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

// ================== SUBSCRIPTIONS ==================
export const addSubscription = async (token, keywords, categories) => {
  const res = await fetch(`${API_URL}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ keywords, categories }),
  });
  return res.json();
};

export const getSubscriptions = async (token) => {
  const res = await fetch(`${API_URL}/subscriptions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

// ================== SEARCH HISTORY ==================
export const saveSearchQuery = async (token, query) => {
  const res = await fetch(`${API_URL}/search-history/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  return res.json();
};

export const getSearchHistory = async (token) => {
  const res = await fetch(`${API_URL}/search-history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
