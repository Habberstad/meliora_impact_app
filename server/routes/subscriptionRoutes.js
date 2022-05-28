import { Router } from "express";
import SubscriptionControllers from "../controllers/subscriptionController.js";

const router = Router();

router.get("/", SubscriptionControllers.list )
router.get("/list-by-user-id", SubscriptionControllers.listByUserId)
router.get("/:id", SubscriptionControllers.getById)

router.post("/", SubscriptionControllers.create)

router.delete("/", SubscriptionControllers.deleteRecord)



export default router;