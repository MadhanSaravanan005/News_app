// src/api.js
export const fetchArticles = async (category, searchTerm = "", page = 1) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchTerm}&page=${page}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error("Error fetching the news articles:", error);
      throw error;
    }
  };
  