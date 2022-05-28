import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  org_number: String,
  org_name: String,
  google_id: String,
  address: String,
  postal_code: String,
  city: String,
  payment_option: {
    type: String,
    enum: ["vipps", "klarna"]
  },
  subscription_type: {
    type: String,
    enum: ["freemium", "premium"]
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  }
}, {
  collection: "users",
  autoCreate: false
});

export default mongoose.model("User", userSchema);