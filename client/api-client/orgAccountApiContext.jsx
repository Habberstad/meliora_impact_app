import React from "react";
import { fetchJSON } from "../lib/fetchJSON";

export const OrgAccountApiContext = React.createContext({

  async getNpo(query) {
    return await fetchJSON("/api/accounts?"+ new URLSearchParams(query));
  },


});