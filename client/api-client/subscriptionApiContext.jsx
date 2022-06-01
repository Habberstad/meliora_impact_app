import React from "react";
import { postJSON } from "../lib/postJSON";
import { deleteJSON } from "../lib/deleteJSON";

export const SubscriptionApiContext = React.createContext({
  async registerSubscription(subscription) {
    return await postJSON("/api/subscriptions", subscription);
  },

  async deleteSubscription(urlPathParam) {
    return await deleteJSON("/api/subscriptions/" + urlPathParam);
  },
});
