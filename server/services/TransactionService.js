import Transaction from "../models/transactionModel.js";


async function create(query) {
  try {
    const data = await new Transaction(query);

    return data.save();
  } catch (e) {
    throw Error();
  }
}


export default { create };