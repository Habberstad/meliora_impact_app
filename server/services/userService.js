import User from "../models/userModel.js";



async function list(query) {
  try {
    return await User.find(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getById(id) {
  try {
    return await User.findById(id);
  } catch (e) {
    throw Error();
  }
}


async function create(data) {
  try {
    return await new User(data).save();
  } catch (e) {

    throw Error();
  }
}


export default { list, getById, create };