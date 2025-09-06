import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  url: String,
  imageUrl: String,
  description: String,
  source: String,
  publishedAt: String,
});

export default mongoose.model("Bookmark", bookmarkSchema);
