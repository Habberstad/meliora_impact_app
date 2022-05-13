import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fetchJSON from "./fetchJSON.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.static("../client/dist"));

const discovery_endpoint_google =
  "https://accounts.google.com/.well-known/openid-configuration";

app.post("/api/login", (req, res) => {
  const { access_token } = req.body;

  res.cookie("access_token", access_token, { signed: true });
  res.sendStatus(200);
});

app.get("/api/login", async (req, res) => {
  const { access_token } = req.signedCookies;

  if (access_token) {
    const { userinfo_endpoint } = await fetchJSON(discovery_endpoint_google);

    try {
      const userinfo = await fetchJSON(userinfo_endpoint, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      res.json(userinfo);
    } catch (e) {
      e.message.toString();
    }
  }
});

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
