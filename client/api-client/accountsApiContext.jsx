import React from "react";
import { fetchJSON } from "../lib/fetchJSON";

export const AccountsApiContext = React.createContext({

  async getAccounts(query) {
    return await fetchJSON("/api/accounts?"+ new URLSearchParams(query));
  },


});