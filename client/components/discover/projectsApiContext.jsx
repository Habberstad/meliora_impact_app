import React from "react";
import { fetchJSON } from "../../lib/fetchJSON";
import { postJSON } from "../../lib/postJSON";



export const ProjectsApiContext = React.createContext({

  async listProjects() {
    return await fetchJSON("/api/projects");
  },
  async createProjects(project) {
    return await postJSON("/api/projects", project);
  },

});