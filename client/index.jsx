import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/articles/Article";
import DiscoverPage from "./components/discover/DiscoverPage";
import MyNonProfitsPage from "./components/my-non-profits/MyNonProfitsPage";
import { LoginPage } from "./components/login/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact path="/articles" element={<ArticlesPage />} />
        <Route exact path="/articles/article" element={<Article />} />
        <Route exact path="/discover" element={<DiscoverPage />} />
        <Route exact path="/my-non-profits" element={<MyNonProfitsPage />} />
        <Route exact path="/wrapped" element={<MyNonProfitsPage />} />
        <Route exact path="/templates" element={<MyNonProfitsPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
