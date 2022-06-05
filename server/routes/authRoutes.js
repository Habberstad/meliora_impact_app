import { Router } from "express";
import passport from "passport";
import AuthControllers from "../controllers/authControllers.js";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed", }),
  AuthControllers.googleCallback
);


router.get("/login/failed", AuthControllers.loginFailed);


router.get("/logout", AuthControllers.logout);


router.get("/login/success", AuthControllers.loginSuccess);

export default router;
