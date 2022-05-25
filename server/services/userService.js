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

async function getById(id) {
  try {
    const user = await User.aggregate(
      [
        { $match: { _id: ObjectId(id) } },
        {
          $lookup: {
            from: "transactions",
            localField: "_id",
            foreignField: "giver_id",
            as: "donation_history"
          }
        },
        { $match: { _id: ObjectId(id) } },
        {
          $lookup: {
            from: "npos",
            localField: "active_npos_id.id",
            foreignField: "_id",
            as: "npo_partners"
          }
        }



      ]
    );

    console.log(user);

    return user;
  } catch (e) {
    throw Error();
  }
}


async function create(query) {
  console.log(query);
  try {
    const data = await new User(query);
    return data.save();
  } catch (e) {

    throw Error();
  }
}


export default { list, getById, create };