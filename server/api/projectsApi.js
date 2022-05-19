import { Router } from "express";
import { ObjectId } from "mongodb";

export function ProjectsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const { category } = req.query;
    if (category) {
      query.category = { $eq: category };
    }

    const { npoName } = req.query;
    if (npoName) {
      query.npoName = { $eq: npoName };
    }

    const { _id } = req.query;
    if (_id) {
      query._id = { $eq: ObjectId(_id) };
    }

    const projects = await mongoDatabase
      .collection("projects")
      .find(query)
      .toArray();
    res.json(projects);
  });


  return router;
}
