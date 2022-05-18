import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import path from "path";

import { ArticlesAPI } from "./Api/articlesApi.js";
import { MongoClient } from "mongodb";
import { ProjectsApi } from "./Api/projectsApi.js";
import { NpoApi } from "./Api/npoApi.js";
import { AccountsApi } from "./Api/accountsApi.js";
import authRoute from "./test/auth.js";

import passportSetup from "./test/passport.js";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("../client/dist"));

const discovery_endpoint_google =
  "https://accounts.google.com/.well-known/openid-configuration";

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("Connected to mongodb");
  const databases = await mongoClient.db().admin().listDatabases();
  app.use(
    "/api/articles",
    ArticlesAPI(mongoClient.db(process.env.MONGODB_DATABASE || "articles"))
  );

  app.use(
    "/api/projects",
    ProjectsApi(mongoClient.db(process.env.MONGODB_DATABASE || "meliora_database"))
  );

  app.use(
    "/api/npos",
    NpoApi(mongoClient.db(process.env.MONGODB_DATABASE || "meliora_database"))
  );

  app.use(
    "/api/accounts",
    AccountsApi(mongoClient.db(process.env.MONGODB_DATABASE || "meliora_database"))
  );

});

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);

app.use("/login", authRoute);

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});


