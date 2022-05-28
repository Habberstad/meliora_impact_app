import React from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { postJSON } from "../lib/postJSON";

export const UserApiContext = React.createContext({
  async listUsers(query) {
    return await fetchJSON("/api/user?" + new URLSearchParams(query));
  },

  async getUserById(urlPathParam) {
    return await fetchJSON("/api/users/" + urlPathParam);
  },

  async getUserByGoogleId(urlPathParam) {
    return await fetchJSON("/api/users/google-id/" + urlPathParam);
  },

  async registerUser(newUser) {
    return await postJSON("/api/users/register", newUser);
  },

  async getCurrentUser(urlPathParam) {
    return await fetchJSON("/api/users/login/user");
  },
});
