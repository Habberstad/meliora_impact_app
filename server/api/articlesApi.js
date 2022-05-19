import { Router } from "express";
import { ObjectID, ObjectId } from "mongodb";

export function ArticlesAPI(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};
    console.log("test1", req.query)
    const { npoName } = req.query;
    if (npoName) {
      query.npoName = { $eq: npoName };
    }

    const { category } = req.query;
    if (category) {
      query.category = { $eq: category };
    }

    console.log("test2", query)

    const articles = await mongoDatabase
      .collection("articles")
      .find(query)
      .toArray();
    res.json(articles);
  });

  return router;
}
