import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const transactionSchema = new mongoose.Schema({
  payment_amount: {
    type: Number,
    required: true
  },
  payment_frequency:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  user_id: {
    type: String,
    required: true
  },
  npo_id: {
    type: ObjectId,
    required: true
  },
});

export default mongoose.model("Transaction", transactionSchema, "transactions");
