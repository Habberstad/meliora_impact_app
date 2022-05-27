import React from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { postJSON } from "../lib/postJSON";

export const SubscriptionApiContext = React.createContext({
  async registerSubscription(subscription) {
    return await postJSON("/api/user", subscription);
  },
});
