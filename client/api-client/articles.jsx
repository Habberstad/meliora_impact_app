import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const getArticles = () => {
  return instance.get("/articles");
};
