import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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