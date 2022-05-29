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
    const query = {};
    if (req.user === undefined)
      return res.status(200).json(null);
    else
      query.google_id = req.user.id;

    const data = await UserService.getLoggedInUser(query);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}


async function getByGoogleId(req, res) {
  try {
    const data = await UserService.getByGoogleId(req.params.id);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res) {

  req.body.google_id = req.user.id;
  req.body.name = req.user.displayName;
  console.log(req.body);
  try {
    const user = await UserService.list({org_number: req.body.org_number});
    if (user.length !== 0)
      return res.status(409).json({ status: 409, message: "already exist" });


    await UserService.create(req.body);
    return res.status(201).redirect(config.url.API_URL);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function checkIfRegistered(req, res) {


  try {
    const query = {};
    const { org_number } = req.query;
    query.org_number = org_number;


    const user = await UserService.list(query);
    console.log(user);
    if (user.length === 0)
      return res.status(200).json({ status: 200, isRegistered: false, message: "not registered" });
    else
      return res.status(200).json({ status: 200, isRegistered: true, message: "already registered" });

  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { list, getById, create, getByGoogleId, getLoggedInUser, checkIfRegistered };
