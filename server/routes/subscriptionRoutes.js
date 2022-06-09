import { Router } from "express";
import SubscriptionControllers from "../controllers/subscriptionController.js";
import { hasAuthority } from "../middleware/middleware.js";

const router = Router();

router.get("/", hasAuthority("ADMIN"), SubscriptionControllers.list )
router.get("/user/logged-in", SubscriptionControllers.listLoggedUsers)
router.get("/:id", hasAuthority("ADMIN"), SubscriptionControllers.getById)
router.post("/", SubscriptionControllers.create)
router.delete("/:id", SubscriptionControllers.deleteRecord)


export default router;