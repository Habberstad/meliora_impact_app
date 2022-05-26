import mongoose from "mongoose";

const npoSchema = new mongoose.Schema({
  name: String,
  card_description: String,
  card_image: String,
  category: String,
  description: String
});

export default mongoose.model("Npo", npoSchema, "npos");
