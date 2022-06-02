import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const subscriptionSchema = new mongoose.Schema({
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
    default: Date.now()
  },

  impacts:{
    type: Array,
    default: [
      {
        "impact_type": "books bought",
        "amount": "5000",
        "donation_type": "Monthly donation"
      },
      {
        "impact_type": "Schools built",
        "amount": "5",
        "donation_type": "Donated to"
      }
    ]
  }

});

export default mongoose.model("Subscription", subscriptionSchema, "subscriptions");