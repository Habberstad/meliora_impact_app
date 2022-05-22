import Npo from "../models/npoModel.js";


async function list(query) {
  try {
    return await Npo.find(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getById(id) {
  try {
    return await Npo.findById(id);
  } catch (e) {

    throw Error();
  }
}

async function create(data) {
  try {
    return await new Npo(data).save();
  } catch (e) {

    throw Error();
  }
}


export default { list, getById, create };