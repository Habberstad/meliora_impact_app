import  Transaction  from "../models/transactionModel.js";

async function listByUserId(user_id) {

  try {
    return await Transaction.aggregate([
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
      {
        $set: {
          category: { $arrayElemAt: ["$nyListe.category", 0] }
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

export default { listByUserId };