import { Router } from "express";
import TransactionController from "../controllers/transactionController.js";

const router = Router();

router.get("/user/logged-in", TransactionController.listLoggedUsers)


export default router;