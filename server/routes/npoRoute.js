import { Router } from "express";
import NpoController from "../controllers/npoController.js";

const router = Router();

router.get("/", NpoController.list )
router.get("/:id", NpoController.getById)

router.post("/", NpoController.create)


export default router;