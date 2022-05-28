import { ObjectId } from "mongodb";
import SubscriptionService from "../services/subscriptionService.js";

async function list(req, res) {
  const query = {};

  const { _id } = req.query;
  if (_id !== "" && _id !== undefined && ObjectId.isValid(_id)) {
    query._id = { $eq: ObjectId(_id) };
  }

  try {
    const npo = await SubscriptionService.list(query);
    return res.status(200).json(npo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function listByUserId(req, res) {
  const query = {};
  console.log(req.query)
  const { user_id } = req.query;
  if(user_id)
    query.user_id = user_id
  else
    return res.status(200).json([]);

  try {
    const npo = await SubscriptionService.list(query);
    return res.status(200).json(npo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function getById(req, res) {
  try {
    const data = await SubscriptionService.getById(req.params.id);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res) {
  try {
    await SubscriptionService.create(req.body);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function deleteRecord(req, res) {
  try {
    const query = {};
    console.log(req.query)
    const { _id } = req.query;
    if (_id !== "" && _id !== undefined) {
      query._id = ObjectId(_id) ;
    }
    console.log(query)
    await SubscriptionService.deleteRecord(query);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { list, getById, create, listByUserId , deleteRecord};