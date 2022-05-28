import React from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { postJSON } from "../lib/postJSON";
import { deleteJSON } from "../lib/deleteJSON";

export const SubscriptionApiContext = React.createContext({

  async registerSubscription(subscription) {
    console.log("apiContext", subscription)
    return await postJSON("/api/subscriptions", subscription);
  },

  async deleteSubscription(urlPathParam) {
    return await deleteJSON ("/api/subscriptions?" + urlPathParam);
  },


});
