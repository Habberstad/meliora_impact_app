import React from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { postJSON } from "../lib/postJSON";

export const AccountsApiContext = React.createContext({

  async getAccounts(query) {
    return await fetchJSON("/api/accounts?"+ new URLSearchParams(query));
  },

  async addNewAccount(account) {
    return await postJSON("/api/accounts", account);
  },


});