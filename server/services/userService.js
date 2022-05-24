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


async function create(query) {
  console.log(query)
  try {
    const data = await new User(query)
    return data.save();
  } catch (e) {

    throw Error();
  }
}


export default { list, getById, create };