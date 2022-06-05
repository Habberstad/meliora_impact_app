import { Router } from "express";
import UserController from "../controllers/userController.js";
import { accessToOwnAccountOnly, hasAccount, hasAuthority, isAuthenticated } from "../middleware/middleware.js";

const router = Router();

router.get("/:id", hasAuthority("ADMIN")  , UserController.getById);
router.get("/login/:id", UserController.getLoggedInUser);
router.get("/org/check-register", UserController.checkIfRegistered);

router.post("/register", isAuthenticated, UserController.create);



export default router;