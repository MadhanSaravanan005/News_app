import express from "express";
import { authMiddleware } from "../middleware/auth.js"; // if you have JWT auth
import SearchHistory from "../models/SearchHistory.js"; // include .js extension

const router = express.Router();

// Save a search query
router.post("/save", authMiddleware, async (req, res) => {
  const { query } = req.body;
  try {
    const search = new SearchHistory({
      userId: req.user.id,
      query
    });
    await search.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get recent searches
router.get("/", authMiddleware, async (req, res) => {
  try {
    const searches = await SearchHistory.find({ userId: req.user.id })
      .sort({ searchedAt: -1 })
      .limit(10);
    res.json(searches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
