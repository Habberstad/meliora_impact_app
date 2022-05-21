import express from "express";
import { Router } from "express";
import Article from "../models/articleModel.js";
import { ObjectId } from "mongodb";
import { config } from "../config/Constants.js";

const router = Router();

router.get("/", async (req, res) => {
  const query = {};

  const { category } = req.query;
  if (category !== "" && category !== undefined) {
    query.category = category;
  }

  const { _id } = req.query;
  if (_id !== "" && _id !== undefined && ObjectId.isValid(_id)) {
    query._id = { $eq: ObjectId(_id) };
  }

  const data = await Article.find(query);
  res.send(data);

});

/*
router.post("/post1", (req, res) => {
  const project = new Project({
    name: req.body.name
  })

  res.send(project)
})

 */


export default router;