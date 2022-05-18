import React from "react";
import { fetchJSON } from "../../lib/fetchJSON";
import { postJSON } from "../../lib/postJSON";

export const LoginApiContext = React.createContext({

  async registerLogin(provider, login) {
    return await postJSON(`/api/login/${provider}`, login);
  },
  async endSession() {
    const res = await fetch("/api/login", { method: "DELETE" });
    if (!res.ok) {
      throw new Error(`Failed to post ${res.status}: ${res.statusText}`);
    }
  },
});