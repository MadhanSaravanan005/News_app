// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/auth.js";
import newsRoutes from "./routes/news.js";
import bookmarkRoutes from "./routes/bookmarks.js";
import subscriptionRoutes from "./routes/subscription.js";
import prefRoutes from "./routes/preferences.js";
import searchHistoryRoutes from "./routes/searchHistory.js";

import { createServer } from "http";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "*", // Vercel handles frontend separately; allow all origins or set your domain
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/preferences", prefRoutes);
app.use("/api/search-history", searchHistoryRoutes);

// Export for Vercel serverless
export default app;

// Optional: for local testing
if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}
