import NpoService from "../services/npoService.js";
import { ObjectId } from "mongodb";


async function list(req, res, next) {
  const query = {};

  try {
    const projects = await NpoService.list(query);
    return res.status(200).json(projects);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function getById(req, res){
  try {
    const id = ObjectId(req.params.id)
    const data = await NpoService.getById(id);

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res){
  try {
    await NpoService.create(req.query);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { list, getById, create };