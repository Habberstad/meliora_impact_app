import mongoose from "mongoose";

const npoSchema = new mongoose.Schema({
  name: String,
  card_description: String,
  card_image: String,
});

export default mongoose.model("Npo", npoSchema);
