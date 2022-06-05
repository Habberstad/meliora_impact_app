import UserService from "../services/userService.js";
import { ObjectId } from "mongodb";
import { config } from "../config/Constants.js";
import User from "../models/userModel.js";
import NpoService from "../services/npoService.js";

async function list(req, res) {
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

async function getLoggedInUser(req, res) {

  try {
    const data = await UserService.getLoggedInUser(req.user);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res) {

  req.body.google_id = req.user.id;
  req.body.name = req.user.displayName;
  req.body.img_url = req.user.photos[0].value;

  try {
    const user = await UserService.list({ org_number: req.body.org_number });
    if (user.length !== 0)
      return res.status(409).json({ status: 409, message: "already exist" });

    await UserService.create(req.body);
    return res.status(201).redirect(config.url.API_URL);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function checkIfRegistered(req, res) {
  const query = {};
  const { org_number } = req.query;
  query.org_number = org_number;

  try {
    const isRegistered = await UserService.isRegisteredOrgId(query);

    return res.status(200).json({ status: 200, isRegistered });

  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { list, getById, create, getLoggedInUser, checkIfRegistered };
