import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import cookieSession from "cookie-session";
import cors from "cors";
import { ArticlesAPI } from "./api/articlesApi.js";
import { MongoClient } from "mongodb";
import { ProjectsApi } from "./api/projectsApi.js";
import { NpoApi } from "./api/npoApi.js";
import { AccountsApi } from "./api/accountsApi.js";
import passportSetup from "./passport.js";
import authRoute from "./api/authApi.js";


const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("../client/dist"));

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

app.use("/auth", authRoute);

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
