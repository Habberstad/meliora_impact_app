import mongoose from "mongoose";

const npoSchema = new mongoose.Schema({
  name: String,
  description: String
});

export default mongoose.model("Npo", npoSchema);