import React from "react";
import { fetchJSON } from "../lib/fetchJSON";


export const TransactionApiContext = React.createContext({

  async getCurrentUsersTransactions(query) {
    return await fetchJSON("/api/transactions/user/logged-in?" + new URLSearchParams(query));
  },

});