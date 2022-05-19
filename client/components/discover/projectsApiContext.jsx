import React from "react";
import { fetchJSON } from "../../lib/fetchJSON";
import { postJSON } from "../../lib/postJSON";



export const ProjectsApiContext = React.createContext({

  async listProjects(query) {
    return await fetchJSON("/api/projects?"+ new URLSearchParams(query));
  },


});