import express from "express";
import jwt from "jsonwebtoken";
import Bookmark from "../models/Bookmark.js";

const router = express.Router();

// Middleware for auth
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Save bookmark
router.post("/", authMiddleware, async (req, res) => {
  const bookmark = new Bookmark({ ...req.body, userId: req.userId });
  await bookmark.save();
  res.json(bookmark);
});

// Get bookmarks
router.get("/", authMiddleware, async (req, res) => {
  const bookmarks = await Bookmark.find({ userId: req.userId });
  res.json(bookmarks);
});

export default router;
