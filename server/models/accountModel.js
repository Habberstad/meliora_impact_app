import mongoose from "mongoose";


const orgAccountSchema = new mongoose.Schema({
  org_name: {
    type: String,
    required: true
  },
  google_id: {
    type: String,
    required: true
  },
  org_number: {
    type: String,
    required: true
  },
  subscription: {
    type: String,
    enum:["FREE", "STANDARD", "GRANDE"],
    default: "FREE",
    required: true
  },
  role: {
    type: String,
    enum: ["USER, ADMIN"],
    default: "USER",
    required: true
  }
}, {
  collection: "accounts",
});

export default mongoose.model("Account", orgAccountSchema);