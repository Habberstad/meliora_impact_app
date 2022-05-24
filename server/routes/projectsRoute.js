
import { Router } from "express";
import ProjectController from "../controllers/projectController.js";


const router = Router();


router.get("/", ProjectController.listProjects);
router.get("/:id", ProjectController.getProjectById);
router.post("/", ProjectController.createProject);


export default router;