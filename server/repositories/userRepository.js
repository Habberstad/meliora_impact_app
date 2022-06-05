import User from "../models/userModel.js";
import Npo from "../models/npoModel.js";
import { ObjectId } from "mongodb";

async function list(query) {
  try {
    return await User.find(query);
  } catch (e) {
    throw Error(e);
  }
}

async function getAllUserInfoById(userId) {

  try {
    const user = await User.aggregate([
      { $match: { _id: ObjectId(userId) } },
      {
        $lookup: {
          from: "subscriptions",
          localField: "google_id",
          foreignField: "user_id",
          as: "active_subscriptions",
        },
      },
      {
        $lookup: {
          from: "npos",
          localField: "active_subscriptions.npo_id",
          foreignField: "_id",
          as: "npo_partners",
        },
      },
      {
        $lookup: {
          from: "transactions",
          localField: "google_id",
          foreignField: "user_id",
          as: "donation_history",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "google_id",
          foreignField: "google_id",
          as: "users",
        },
      },
      {
        $lookup: {
          from: "npos",
          localField: "subs.npo_id",
          foreignField: "_id",
          as: "new_sub",
        },
      },
      {
        $lookup: {
          from: "active_subscriptions",
          localField: "google_id",
          foreignField: "user_id",
          as: "active_subscriptions2",
        },
      },
      {
        $set: {
          donation_history: {"user_name": { $arrayElemAt: ["$users.name", 0] }}
        },
      },
      {
        $set: {
          donation_history: {"npo_name": { $arrayElemAt: ["$npo_partners.name", 0] }}
        },
      },
      {
        $set: {
          active_subscriptions: {"user_name": { $arrayElemAt: ["$users.name", 0] }}
        },
      },
      {
        $set: {
          active_subscriptions: {"npo_name": { $arrayElemAt: ["$npo_partners.name", 0] }}
        },
      },

    ], );
    return user;
  } catch (e) {
    throw Error();
  }
}

async function getById(id) {
  try {
    const user = await User.aggregate([
      { $match: { _id: ObjectId(id) } },
      {
        $lookup: {
          from: "transactions",
          localField: "_id",
          foreignField: "giver_id",
          as: "donation_history",
        },
      },
      { $match: { _id: ObjectId(id) } },
      {
        $lookup: {
          from: "npos",
          localField: "active_npos_id.id",
          foreignField: "_id",
          as: "npo_partners",
        },
      },
    ]);

    return user;
  } catch (e) {
    throw Error();
  }
}


async function create(query) {
  try {
    const data = await new User(query);

    return data.save();
  } catch (e) {
    throw Error();
  }
}




export default { list, getById, create , getAllUserInfoById};
