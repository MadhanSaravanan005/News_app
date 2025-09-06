// backend/routes/subscription.js
import express from "express";
import mongoose from "mongoose"; // ✅ use import instead of require
import Subscription from "../models/Subscription.js"; // example model

const router = express.Router();

// Add subscription
router.post("/", async (req, res) => {
  try {
    const { userId, keywords, categories } = req.body;
    const sub = new Subscription({ userId, keywords, categories });
    await sub.save();
    res.json(sub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user subscriptions
router.get("/:userId", async (req, res) => {
  try {
    const subs = await Subscription.find({ userId: req.params.userId });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router; // ✅ use export default
