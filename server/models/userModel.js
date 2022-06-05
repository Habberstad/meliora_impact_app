import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new mongoose.Schema(
  {
    name: String,
    last_name: String,
    email: {
      type: String,
      unique: true,
    },
    img_url: {
      type: String,
      unique: true,
    },

    org_number: {
      type: String,
      required: true,
      unique: true,
    },
    org_name: {
      type: String,
      required: true,
    },
    google_id: {
      type: String,
      required: true,
      unique: true,
    },
    address: String,
    postal_code: String,
    city: String,
    payment_option: {
      type: String,
      enum: ["vipps", "klarna", "visa", "paypal", "none"],
      default: "none",
    },
    subscription_type: {
      type: String,
      enum: ["freemium", "premium"],
      required: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    privacy_consent:{
      type: Boolean,
      required: true,
    }
  },
  {
    collection: "users",
    autoCreate: false,
  }
);

export default mongoose.model("User", userSchema);
