import TransactionService from "../services/transactionService.js";

async function listLoggedUsers(req, res) {
  try {
    const subs = await TransactionService.listLoggedUsers(req.user.id);
    return res.status(200).json(subs);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export default { listLoggedUsers };