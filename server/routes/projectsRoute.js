import express from "express";
import { Router } from "express";
import Project from "../models/projectsModel.js"
import { ObjectId } from "mongodb";

const router = Router();

router.get("/", async (req, res) => {
  const query = {};

  const { category } = req.query;
  if (category !== "" && category !== undefined) {
    query.category = category;
  }

  const { npoName } = req.query;
  if (npoName !== "" && npoName !== undefined) {
    query.npoName = npoName;
  }

  const { _id } = req.query;
  console.log("id",_id)
  if (_id !== "" && _id !== undefined) {
    query._id = { $eq: ObjectId(_id) }
  }

  console.log("Discover page, myQuery", query)
  const projects = await Project.find(query)

  res.send(projects)
})

/*
router.post("/post1", (req, res) => {
  const project = new Project({
    name: req.body.name
  })

  res.send(project)
})

 */


export default router;