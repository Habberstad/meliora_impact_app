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


async function listByUserId(_id) {

  try {
    return await Subscription.aggregate([
      { $match: { user_id: _id } },
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
  } catch (e) {
    throw Error(e);
  }

}

export default { list, getById, create, deleteRecord, listByUserId };