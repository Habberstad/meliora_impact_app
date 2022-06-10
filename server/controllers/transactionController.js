import TransactionService from "../services/transactionService.js";
import { ObjectId } from "mongodb";

async function listLoggedUsers(req, res) {
  try {
    const subs = await TransactionService.listLoggedUsers(req.user.id);
    return res.status(200).json(subs);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

async function create(req, res) {

  try {
    await TransactionService.create(req.body);

    return res.status(201).json({ status: 201 });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { listLoggedUsers, create };