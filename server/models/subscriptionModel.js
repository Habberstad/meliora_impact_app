import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const subscriptionSchema = new mongoose.Schema({
  npo_id: ObjectId,
  user_id: String,
  payment_amount: Number,
  payment_frequency: String,
});

export default mongoose.model("Subscription", subscriptionSchema, "subscriptions");