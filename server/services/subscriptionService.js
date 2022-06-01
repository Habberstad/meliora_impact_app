import Subscription from "../models/subscriptionModel.js";
import { ObjectId } from "mongodb";
import User from "../models/userModel.js";

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
    const data = new Subscription(query);
    return await data.save();
  } catch (e) {

    throw Error();
  }
}

async function deleteRecord(_id) {
  try {


    if(!ObjectId.isValid(_id))
      throw ("Parameter is not an ObjectId")

    return await Subscription.findByIdAndDelete(_id);
  } catch (e) {

    throw Error();
  }
}


async function listByUserId(_id) {
  const user_id = _id
  console.log(user_id);
  try {
    const subList = await Subscription.aggregate([
      { $match: { user_id: "104270716923862108147" } },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "google_id",
          as: "users1"
        }
      },

      {
        $lookup: {
          from: "npos",
          localField: "npo_id",
          foreignField: "_id",
          as: "nyListe"
        }
      },
      {
        $set: {
          npoName: { $arrayElemAt: ["$nyListe.name", 0] }
        },
      },
      { $unset: "nyListe" },

      {
        $set: {
          test: { $arrayElemAt: ["$users1.name", 0] }
        },
      },
      { $unset: "users1" },

    ]);
    return subList;
  } catch (e) {
    throw Error();
  }

}

export default { list, getById, create, deleteRecord, listByUserId };