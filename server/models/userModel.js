import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  org_number: {
    type: String,
    unique: true
  },
  google_id: {
    type: String,
    unique: true
  },
  description: String,
  address: String,
  postal_code: String,
  city: String,
  subscription: String,
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  }
}, {
  collection: "users",
  bufferCommands: false,
  autoCreate: false
});

export default mongoose.model("User", userSchema);