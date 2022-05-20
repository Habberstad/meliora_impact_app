const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: String,
  np: String,
})

module.exports = mongoose.model("UserModel", schema)