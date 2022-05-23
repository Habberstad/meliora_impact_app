import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  org_id: String,
  description: String,
  role: {
    type: String,
    enum: ["USER, ADMIN"],
    default: "USER",
    required: true
  }
}, {
  collection: "projects",
  bufferCommands: false,
  autoCreate: false
});

export default mongoose.model("User", userSchema);