const API_URL = "http://localhost:5000/api"; // backend base URL

export const fetchNews = async (category, page, query = "") => {
  const res = await fetch(
    `${API_URL}/news?category=${category}&page=${page}&q=${query}`
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
};

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
