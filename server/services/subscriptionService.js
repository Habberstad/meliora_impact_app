import { ObjectId } from "mongodb";
import SubscriptionRepository from "../repositories/subscriptionRepository.js";

async function list(query) {
  try {
    return await SubscriptionRepository.list(query);
  } catch (e) {
    throw Error(e);
  }
}

async function getById(id) {
  try {
    return await SubscriptionRepository.getById(id);
  } catch (e) {
    throw Error(e);
  }
}

async function create(query) {
  try {
    return await SubscriptionRepository.create(query);
  } catch (e) {
    throw Error(e);
  }
}

async function deleteRecord(_id) {
  try {
    if(!ObjectId.isValid(_id))
      throw ("Parameter is not an ObjectId")

    return await SubscriptionRepository.deleteRecord(_id);
  } catch (e) {
    throw Error(e);
  }
}


async function listByUserId(_id) {


  try {
    return await SubscriptionRepository.listByUserId(_id);
  } catch (e) {
    throw Error(e);
  }

}

export default { list, getById, create, deleteRecord, listByUserId };