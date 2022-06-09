import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  name: String,
  sub_title: String,
  image: String,
  npoName: String,
  category: String,
  date: String,
  header_image: String,
  middle_image: String,
  carousel_image1: String,
  carousel_image2: String,
  carousel_image3: String,
  description: String,
  published: String,
  paragraph_1_1: String,
  paragraph_1_2: String,
  paragraph_2: String,
  paragraph_3_header: String,
  paragraph_3_1: String,
  paragraph_3_2: String,
  paragraph_4: String

}, {
  collection: "articles",
  bufferCommands: false,
  autoCreate: false
});

export default mongoose.model("Article", articleSchema, "articles");