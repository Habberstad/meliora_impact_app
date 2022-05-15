import { Router } from "express";

export function ProjectsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {
    };

    const { category } = req.query;
    if (category) {
      query.category = { $regex: category };
    }

    console.log(req.query)

    const projects = await mongoDatabase
      .collection("projects")
      .find(query)
      .toArray();
    res.json(projects);
  });


  return router;
}
