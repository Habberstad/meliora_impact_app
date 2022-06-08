import NpoService from "../services/npoService.js";
import { ObjectId } from "mongodb";

async function list(req, res) {
  const query = {};

  const { _id } = req.query;
  if (_id !== "" && _id !== undefined && ObjectId.isValid(_id)) {
    query._id = { $eq: ObjectId(_id) };
  }

  const { category } = req.query;
  if (category !== "" && category !== undefined) {
    query.category = category;
  }

  try {
    const npo = await NpoService.list(query);
    return res.status(200).json(npo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function getById(req, res) {
  try {
    const data = await NpoService.getById(req.params.id);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res) {
  try {

    await NpoService.create(req.body);

    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { list, getById, create };
