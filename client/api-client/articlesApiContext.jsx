import React from "react";
import { fetchJSON } from "../lib/fetchJSON";



export const ArticleApiContext = React.createContext({

  async getArticles(query) {
    return await fetchJSON("/api/articles?"+ new URLSearchParams(query));
  },

  async getArticleById(urlPathParam) {
    return await fetchJSON("/api/articles/"+ urlPathParam);
  },



});
