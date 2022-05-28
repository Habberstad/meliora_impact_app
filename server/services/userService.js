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

async function getLoggedInUser(google_id) {


  try {

    const user1 = await User.find(google_id);

    if(user1.length === 0)
        return null

    const userId = user1[0]._id;

    const user = await User.aggregate([
      { $match: { _id: ObjectId(userId) } },
      {
        $lookup: {
          from: "transactions",
          localField: "_id",
          foreignField: "giver_id",
          as: "donation_history",
        },
      },

      {
        $lookup: {
          from: "npos",
          localField: "active_npos_id.id",
          foreignField: "_id",
          as: "npo_partners",
        },
      },

      {
        $lookup: {
          from: "subscriptions",
          localField: "google_id",
          foreignField: "user_id",
          as: "active_subscriptions",
        },
      },
    ], );

    return user[0];
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

async function getByGoogleId(id) {

  try {
    const user1 = await User.find({ google_id: id });
    const userId = user1[0]._id;


    const user = await User.aggregate([
      { $match: { _id: ObjectId(userId) } },
      {
        $lookup: {
          from: "transactions",
          localField: "_id",
          foreignField: "giver_id",
          as: "donation_history",
        },
      },
      { $match: { _id: ObjectId(userId) } },
      {
        $lookup: {
          from: "npos",
          localField: "active_npos_id.id",
          foreignField: "_id",
          as: "npo_partners",
        },
      },
    ]);

    return user[0];
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

export default { list, getById, create, getByGoogleId , getLoggedInUser};
