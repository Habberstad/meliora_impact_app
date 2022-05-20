import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import passportSetup from "./passport.js"; // The import is in use. Do not delete!
import cookieSession from "cookie-session";
import cors from "cors";
import authRoute from "./routes/authRoutes.js";
import mongoose from "mongoose";
import projectsRoute from "./routes/projectsRoute.js";
import articlesRoute from "./routes/articlesRoute.js";
import { config } from "./config/Constants.js";
import { orgAccountsRoute } from "./routes/orgAccountsRoute.js";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("../client/dist"));

try {
  await mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
} catch (error) {
  console.log("Could not connect to MongoDB");
  console.log(error);
}

app.use("/api/projects", projectsRoute);
app.use("/api/articles", articlesRoute);

app.use("/api/accounts", orgAccountsRoute)

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: config.url.API_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    res.redirect("/");
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
