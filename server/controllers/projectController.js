import ProjectService from "../services/projectService.js";
import { ObjectId } from "mongodb";


async function listProjects(req, res, next) {
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
  if (_id !== "" && _id !== ObjectId.isValid(_id)) {
    query._id = { $eq: ObjectId(_id) };
  }

  try {
    const projects = await ProjectService.listProjects(query);
    return res.status(200).json(projects);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function getProjectById(req, res){
  try {
    const project = await ProjectService.getProjectById(req.params.id);
    return res.status(200).json(project);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function createProject(req, res){
  try {
    await ProjectService.createProject(req.query);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { listProjects, getProjectById, createProject };