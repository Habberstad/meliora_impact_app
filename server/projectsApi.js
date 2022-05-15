import { Router } from "express";

export function ProjectsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {
    };

    const { category } = req.query;
    if (category) {
      query.category = { $eq: category };
    }

    const { npoName } = req.query;
    if (npoName) {
      query.npoName = { $eq: npoName };
    }


    const projects = await mongoDatabase
      .collection("projects")
      .find(query)
      .toArray();
    res.json(projects);
  });


  return router;
}
