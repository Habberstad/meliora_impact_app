import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  org_number: String,
  org_name: String,
  google_id:  String,
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