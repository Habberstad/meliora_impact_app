import React from "react";
import { postJSON } from "../lib/postJSON";
import { deleteJSON } from "../lib/deleteJSON";
import { fetchJSON } from "../lib/fetchJSON";

export const SubscriptionApiContext = React.createContext({

  async getCurrentUsersSubscriptions() {
    return await fetchJSON("/api/subscriptions/user/logged-in");
  },

  async registerSubscription(subscription) {
    return await postJSON("/api/subscriptions", subscription);
  },

  async deleteSubscription(urlPathParam) {
    return await deleteJSON("/api/subscriptions/" + urlPathParam);
  },
});
