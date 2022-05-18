import { Router } from "express";
import { ObjectID, ObjectId } from "mongodb";

export function ArticlesAPI(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const { _id } = req.query;
    if (_id) {
      query._id = { $eq: ObjectId(_id) };
    }

    const { category } = req.query;
    if (category) {
      query.category = { $eq: category };
    }

    const articles = await mongoDatabase
      .collection("articles")
      .find()
      .toArray(query);
    res.json(articles);
  });

  return router;
}
