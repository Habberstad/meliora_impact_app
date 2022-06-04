import ArticleService from "../services/articleService.js";
import { ObjectId } from "mongodb";


async function listArticles(req, res) {
  const query = {};

  const { category } = req.query;
  if (category !== "" && category !== undefined) {
    query.category = category;
  }

  const { _id } = req.query;
  if (_id !== "" && _id !== undefined && ObjectId.isValid(_id)) {
    query._id = { $eq: ObjectId(_id) };
  }

  try {
    const projects = await ArticleService.listArticles(query);
    return res.status(200).json(projects);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function getArticleById(req, res){
  try {
    console.log("r", req.params.id)
    const project = await ArticleService.getArticleById(req.params.id);
    return res.status(200).json(project);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function createArticle(req, res){
  try {
    await ArticleService.createArticle(req.query);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { listArticles, getArticleById, createArticle };