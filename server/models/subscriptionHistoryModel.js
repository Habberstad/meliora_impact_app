import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const subscriptionHistorySchema = new mongoose.Schema({
  npo_id: {
    type: ObjectId,
    required: true
  },

  user_id: {
    type: String,
    required: true
  },

  payment_amount: {
    type: Number,
    required: true
  },

  payment_frequency: {
    type: String,
    required: true
  },

  date: {
    type: Date,

  },

  cancelDate: {
    type: Date,
    default: Date.now()
  },

});

export default mongoose.model("SubscriptionHistory", subscriptionHistorySchema, "subscriptionsHistory");