import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import { config } from "./config/Constants.js";
import { isAuthenticated, hasAccount, accessToOwnAccountOnly } from "./middleware/middleware.js";
import passportSetup from "./middleware/passport.js";

import authRoutes from "./routes/authRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import npoRoute from "./routes/npoRoute.js";
import userRoute from "./routes/userRoute.js";
import projectsRoute from "./routes/projectsRoute.js";
import articlesRoute from "./routes/articlesRoute.js";

dotenv.config();

export const initServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(express.static("../client/dist"));
  app.use(
    cookieSession({ name: "session", secret: process.env.COOKIE_SECRET, maxAge: 24 * 60 * 60 * 1000 })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(
    cors({
      origin: config.url.API_URL,
      methods: "GET,POST,PUT,DELETE",
      credentials: true
    })
  );

  app.use("/auth", authRoutes);
  app.use("/api/projects", hasAccount, projectsRoute);
  app.use("/api/articles", hasAccount, articlesRoute);
  app.use("/api/npo", npoRoute);
  app.use("/api/subscriptions", hasAccount, subscriptionRoutes);
  app.use("/api/users", userRoute);

  app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
      res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
      res.redirect("/");
    }
  });

  return app;
};



