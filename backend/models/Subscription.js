import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  keywords: [String],    // e.g., ["AI", "Football"]
  categories: [String]   // e.g., ["Technology", "Sports"]
});

export default mongoose.model("Subscription", SubscriptionSchema);
