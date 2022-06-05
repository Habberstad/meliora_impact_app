import UserRepository from "../repositories/userRepository.js";

async function list(query) {
  try {
    return await UserRepository.list(query);
  } catch (e) {
    throw Error(e);
  }
}

async function getLoggedInUser(googleUser) {
  try {

    if (googleUser === undefined)
      return null;

    if (googleUser.id === undefined)
      return null;

    const userFromDb = await UserRepository.list({ google_id: googleUser.id });

    if (userFromDb.length === 0)
      return null;

    const userId = userFromDb[0]._id;

    const user = await UserRepository.getAllUserInfoById(userId);

    return user[0];
  } catch (e) {
    throw Error();
  }
}

async function getById(id) {
  try {
    return await UserRepository.getById(id);
  } catch (e) {
    throw Error();
  }
}

async function create(query) {
  try {
    const data = await UserRepository.create(query);

    return data;
  } catch (e) {
    throw Error();
  }
}

async function isRegisteredUserId(query) {
  try {
    const user = await UserRepository.list(query);
    if (user.length !== 0)
      return true;
    else
      return false;

  } catch (e) {
    throw Error();
  }
}

async function isRegisteredOrgId(query) {
  try {
    const user = await UserRepository.list(query);
    if (user.length !== 0)
      return true;
    else
      return false;

  } catch (e) {
    throw Error();
  }
}


export default { list, getById, create, getLoggedInUser, isRegisteredUserId, isRegisteredOrgId };
