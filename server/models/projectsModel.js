import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const projectSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  npoName: String,
  category: String,
  description: String
}, {
  collection: "projects",
  bufferCommands: false,
  autoCreate: false
});

export default mongoose.model("Project", projectSchema);