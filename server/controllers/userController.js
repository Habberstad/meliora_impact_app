import UserService from "../services/userService.js";
import { ObjectId } from "mongodb";

async function list(req, res, next) {
  const query = {};

  const { _id } = req.query;
  if (_id !== "" && _id !== undefined && ObjectId.isValid(_id)) {
    query._id = { $eq: ObjectId(_id) };
  }

  try {
    const users = await UserService.list(query);
    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function getById(req, res) {
  try {
    const data = await UserService.getById(req.params.id);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res) {
  try {
    await UserService.create(req.query);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { list, getById, create };