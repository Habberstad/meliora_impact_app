import { Router } from "express";

import passport from "passport";
import { config } from "../config/Constants.js";
import User from "../models/userModel.js";

const router = Router();
const CLIENT_URL = config.url.API_URL;

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
  }),
  async function (req, res) {
    const test = await User.find({ google_id: req.user.id });

    if (test.length === 0)
      res.redirect(CLIENT_URL + "/find-company?exists=false");
    else res.redirect(CLIENT_URL);
  }
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", async (req, res) => {
  await req.logout();
  req.session = null;
  req.sessionOptions.maxAge = 0;
  res.redirect(CLIENT_URL);
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

export default router;
