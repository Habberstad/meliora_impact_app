import { Router } from "express";

import passport from "passport";
import { config } from "../config/Constants.js";
import User from "../models/userModel.js";

const router = Router();
const CLIENT_URL = config.url.API_URL;


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));


router.get("/google/callback", passport.authenticate("google", {
    successRedirect:  CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});



router.get("/logout", async (req, res) => {
  await req.logout();
  req.session = null;
  req.sessionOptions.maxAge = 0;
  res.redirect(CLIENT_URL);
});


export default router;