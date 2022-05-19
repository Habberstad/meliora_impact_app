import React from "react";
import { fetchJSON } from "../lib/fetchJSON";

export const NpoApiContext = React.createContext({

  async getNpo(query) {
    return await fetchJSON("/api/npo?"+ new URLSearchParams(query));
  },


});