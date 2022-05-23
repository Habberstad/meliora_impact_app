import Npo from "../models/npoModel.js";
import Projects from "../models/projectsModel.js";
import { ObjectId } from "mongodb";


async function list(query) {
  try {
    return await Npo.find(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getById(id) {
  try {

    const npo = Npo.aggregate(
      [
        { $match: { _id: id } }
        ,
        {
          $lookup: {
            from: "projects",
            localField: "projects_id",
            foreignField: "_id",
            as: "my_projects"
          }
        }

      ]
    );

    return await npo;
  } catch (e) {
    throw Error();
  }
}

async function getByIdWithProjectData(id) {
  try {
    const npo = Npo.aggregate(
      [
        { $match: { _id: ObjectId(id) } }
        ,
        {
          $lookup: {
            from: "projects",
            localField: "projects_id",
            foreignField: "_id",
            as: "my_projects"
          }
        }

      ]
    );

    return await npo;
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