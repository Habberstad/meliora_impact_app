import { Router } from "express";
import { ObjectId } from "mongodb";

export function AccountsApi(mongoDatabase) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const query = {};

    const { _id } = req.query;
    if (_id) {
      query._id = { $eq: ObjectId(_id) };
    }


    const projects = await mongoDatabase
      .collection("accounts")
      .find(query)
      .toArray();
    res.json(projects);
  });


  return router;
}
