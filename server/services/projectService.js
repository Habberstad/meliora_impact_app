import Project from "../models/projectsModel.js";


async function listProjects(query) {
  try {
    return await Project.find(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getProjectById(id) {
  try {
    return await Project.findById(id);
  } catch (e) {

    throw Error();
  }
}

async function createProject(data) {
  try {
    return await new Project(data).save();
  } catch (e) {

    throw Error();
  }
}


export default { listProjects, getProjectById, createProject };