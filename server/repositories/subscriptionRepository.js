import Subscription from "../models/subscriptionModel.js";

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
    throw Error(e);
  }
}



async function create(query) {
  try {
    const data = new Subscription(query);
    return await data.save();
  } catch (e) {
    throw Error(e);
  }
}

async function deleteRecord(_id) {
  try {

    return await Subscription.findByIdAndDelete(_id);
  } catch (e) {
    throw Error(e);
  }
}


async function listByUserId(idQuery) {
  const user_id = idQuery.user_id
  try {
    return await Subscription.aggregate([
      { $match: { user_id: user_id  } },
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
          npo_name: { $arrayElemAt: ["$nyListe.name", 0] }
        },
      },
      { $unset: "nyListe" },

      {
        $set: {
          user_name: { $arrayElemAt: ["$users1.name", 0] }
        },
      },
      { $unset: "users1" },

    ]);
  } catch (e) {
    throw Error(e);
  }
}

export default { list, getById, create, deleteRecord, listByUserId };