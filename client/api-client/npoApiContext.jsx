import React from "react";
import { fetchJSON } from "../lib/fetchJSON";

export const NpoApiContext = React.createContext({

  async listNpos(query) {
    return await fetchJSON("/api/npo?"+ new URLSearchParams(query));
  },

  async getNpoById(urlPathParam) {
    return await fetchJSON("/api/npo/"+ urlPathParam);
  },

});