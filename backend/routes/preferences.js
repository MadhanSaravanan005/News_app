// routes/preferences.js
import express from "express";
import User from "../models/User.js"; // make sure to include .js extension

const router = express.Router();

// Update preferences
router.post("/:userId", async (req, res) => {
  try {
    const { categories } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { favoriteCategories: categories },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get preferences
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user.favoriteCategories || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
