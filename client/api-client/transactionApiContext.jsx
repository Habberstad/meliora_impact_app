import React from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { postJSON } from "../lib/postJSON";


export const TransactionApiContext = React.createContext({

  async getCurrentUsersTransactions(query) {
    return await fetchJSON("/api/transactions/user/logged-in?" + new URLSearchParams(query));
  },

  async registerTransaction(transaction) {
    return await postJSON("/api/transactions", transaction);
  },

});