import Transaction from "../models/transactionModel.js";
import SubscriptionRepository from "../repositories/subscriptionRepository.js";
import TransactionRepository from "../repositories/transactionRepository.js";


async function create(query) {
  try {
    const data = await new Transaction(query);

    return data.save();
  } catch (e) {
    throw Error();
  }
}

async function listLoggedUsers(id) {

  const user_id = id;
  /*
    const { user_id } = id
    if (user_id)
      idQuery.user_id = id
    else
      return [];

     */

  try {
    return await TransactionRepository.listByUserId(user_id);
  } catch (e) {
    throw Error(e);
  }

}


export default { create, listLoggedUsers };