import { Router } from "express";
import UserController from "../controllers/userController.js";
import { isLoggedIn2 } from "./authRoutes.js";
import { accessToOwnAccountOnly, isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", isLoggedIn, UserController.list);
router.get("/:id", accessToOwnAccountOnly , UserController.getById);
router.get("/get-logged-in-user" , UserController.getById);
router.get("/google-id/:id", isLoggedIn , UserController.getLoggedInUser);
router.post("/register", isLoggedIn, UserController.create);


export default router;