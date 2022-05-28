import Subscription from "../models/subscriptionModel.js";
import { ObjectId } from "mongodb";

async function list(query) {
  try {
    return await Subscription.find(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getById(id) {
  try {

    return await Subscription.findById(id);
  } catch (e) {
    throw Error();
  }
}



async function create(query) {
  try {
    const data = new Subscription(query)
    return await data.save();
  } catch (e) {

    throw Error();
  }
}

async function deleteRecord(_id) {
  try {
    return await Subscription.deleteOne(_id)
  } catch (e) {

    throw Error();
  }
}


export default { list, getById, create, deleteRecord };