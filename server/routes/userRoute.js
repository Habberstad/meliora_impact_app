import { Router } from "express";
import UserController from "../controllers/userController.js";
import { isLoggedIn2 } from "./authRoutes.js";
import { accessToOwnAccountOnly, hasAccount, isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", isLoggedIn, UserController.list);
router.get("/:id", accessToOwnAccountOnly , UserController.getById);
router.get("/test/:id", UserController.getLoggedInUser);
router.get("/google-id/:id", isLoggedIn , UserController.getByGoogleId);
router.post("/register", isLoggedIn, UserController.create);


export default router;