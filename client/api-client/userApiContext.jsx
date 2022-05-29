import React from "react";
import { fetchJSON } from "../lib/fetchJSON";
import { postJSON } from "../lib/postJSON";

export const UserApiContext = React.createContext({
  async listUsers(query) {
    return await fetchJSON("/api/users?" + new URLSearchParams(query));
  },

  async getUserById(urlPathParam) {
    return await fetchJSON("/api/users/" + urlPathParam);
  },

  async getUserByGoogleId(urlPathParam) {
    return await fetchJSON("/api/users/google-id/" + urlPathParam);
  },

  async getCurrentUser() {
    return await fetchJSON("/api/users/login/user");
  },

  async checkIsOrgRegistered(query) {
    return await fetchJSON("/api/users/org/check-register?" + new URLSearchParams(query));
  },


//post
  async registerUser(newUser) {
    return await postJSON("/api/users/register", newUser);
  }


});
