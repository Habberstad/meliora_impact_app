import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema({
  name: String,
  last_name: String,

  email: {
    type: String,
    unique: true
  },

  org_number: {
    type: String,
    required: true,
    unique: true
  },

  org_name: {
    type: String,
    required: true

  },
  google_id: {
    type: String,
    required: true,
    unique: true
  },

  address: {
    type: String,
    required: true,
  },

  postal_code: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  payment_option: {
    type: String,
    enum: ["vipps", "klarna"],
    required: true
  },

  subscription_type: {
    type: String,
    enum: ["freemium", "premium"],
    required: true
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