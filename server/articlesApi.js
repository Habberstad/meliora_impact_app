import { Router } from "express";
import { ObjectID, ObjectId } from "mongodb";

export function ArticlesAPI(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const articles = await mongoDatabase
      .collection("articles")
      .find()
      .toArray();
    res.json(articles);
  });

  return router;
}
