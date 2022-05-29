import { Router } from "express";
import ArticleController from "../controllers/articleController.js";

const router = Router();

router.get("/", ArticleController.listArticles )
router.get("/:id", ArticleController.getArticleById)

router.post("/", ArticleController.createArticle)


export default router;