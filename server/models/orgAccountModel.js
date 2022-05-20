import mongoose from "mongoose";


const orgAccountSchema = new mongoose.Schema({
  org_name: String,
  google_id: String,
  org_number: String,
  subscription: {
    type: String
  }
}, {
  collection: "accounts",
});

export default mongoose.model("Account", orgAccountSchema);