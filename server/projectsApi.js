import { Router } from "express";

export function ProjectsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {

    };

    const projects = await mongoDatabase
      .collection("projects")
      .find(query)
      .toArray();
    res.json(projects);
  });


  return router;
}
