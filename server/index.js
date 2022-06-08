import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {initServer} from "./server.js";
dotenv.config();

await mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const app = initServer();

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});