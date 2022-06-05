import NpoRepository from "../repositories/npoRepository.js";

async function list(query) {
  try {
    return await NpoRepository.list(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getById(id) {
  try {
    return await NpoRepository.getById(id);
  } catch (e) {
    throw Error();
  }
}

async function create(query) {
  try {
    const data = new NpoRepository.create(query)
    return await data;
  } catch (e) {

    throw Error();
  }
}


export default { list, getById, create };