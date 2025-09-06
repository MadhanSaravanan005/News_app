
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  favoriteCategories: [String], // optional
});

const User = mongoose.model("User", UserSchema);
export default User;
