import { Router } from "express";

import passport from "passport";
import { config } from "../config/Constants.js";
import User from "../models/userModel.js";

const router = Router();
const CLIENT_URL = config.url.API_URL;

export const isLoggedIn2 = (req, res, next) => {
  if (req.user) {
    next();
  } else
    res.sendStatus(401);
};

/*
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/google", (req, res) => {
  //handle with google
});

 */


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/failed"
  })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});

router.get("/login/success", isLoggedIn2, async (req, res) => {


  res.status(200).json({
    success: true,
    message: "successfull",
    user: req.user,
    cookies: req.cookies
  });


  /*
    if (req.user) {
    const dbUser = await User.find({ google_id: req.user.id });

    if (dbUser.length !== 0 && req.user.id === dbUser[0].google_id) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        cookies: req.cookies
      });
    } else {
      res.redirect(CLIENT_URL)
    }
  }
   */

});


router.get("/logout", async (req, res) => {
  await req.logout();
  req.session = null;
  req.sessionOptions.maxAge = 0;
  res.redirect(CLIENT_URL);
});


export default router;