import { ObjectId } from "mongodb";
import SubscriptionService from "../services/subscriptionService.js";
import Subscription from "../models/subscriptionModel.js";
import TransactionService from "../services/TransactionService.js";

async function list(req, res) {

  try {
    const npo = await SubscriptionService.list(req.query);
    return res.status(200).json(npo);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function listLoggedUsers(req, res) {
  try {

    const subs = await SubscriptionService.listLoggedUsers(req.user.id);
    return res.status(200).json(subs);
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
  const query = {};
  const npo_id = req.body.npo_id;
  query.npo_id = { $eq: ObjectId(npo_id) };
  query.user_id = req.body.user_id

  try {
    const test = await Subscription.find(query)
    console.log("length", test.length)
    if(test.length !== 0)
      return res.status(409).json({ alreadyExist: true, status: 409, message: "already exist" });

    await SubscriptionService.create(req.body);
    await TransactionService.create(req.body);

    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function deleteRecord(req, res) {
  try {
    // const toBeDeleted = await SubscriptionService.getById(req.param.id)
    // await SubscriptionHistoryService.create(toBeDeleted)
    await SubscriptionService.deleteRecord(req.params.id);
    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}



export default { list, getById, create, listLoggedUsers, deleteRecord };