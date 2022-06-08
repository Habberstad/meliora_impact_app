import { Router } from "express";
import SubscriptionControllers from "../controllers/subscriptionController.js";

const router = Router();

router.get("/", SubscriptionControllers.list )
router.get("/user/logged-in", SubscriptionControllers.listLoggedUsers)
router.get("/:id", SubscriptionControllers.getById)
router.post("/", SubscriptionControllers.create)
router.delete("/:id", SubscriptionControllers.deleteRecord)



export default router;