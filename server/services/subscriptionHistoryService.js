import Subscription from "../models/subscriptionModel.js";

async function create(query) {
  try {
    const data = new Subscription(query);
    return await data.save();
  } catch (e) {

    throw Error();
  }
}

export default { create};