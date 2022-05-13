import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/articles/Article";
import DiscoverPage from "./components/discover/DiscoverPage";
import MyNonProfitsPage from "./components/my-non-profits/MyNonProfitsPage";
import { LoginPage } from "./components/login/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed ${res.status}`);
  }
  return await res.json();
}

function LoginOpenID() {
  useEffect(async () => {
    const { authorization_endpoint } = await fetchJSON(
      "https://accounts.google.com/.well-known/openid-configuration"
    );

    const parameters = {
      response_type: "token",
      client_id:
        "1015959050003-0gfbrk1fg1ajblqf2u69qbthl9vvuvhc.apps.googleusercontent.com",
      scope: "email profile",
      redirect_uri: window.location.origin + "/login/callback",
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  }, []);

  return (
    <div>
      <h1>Please wait...</h1>
    </div>
  );
}

function LoginCallback() {
  const navigate = useNavigate();
  useEffect(async () => {
    const { access_token } = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1))
    );

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ access_token }),
    });
    navigate("/articles");
  });

  return <h1>Please ...</h1>;
}

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
        <Route exact path="/login-google" element={<LoginOpenID />} />
        <Route path={"/login/callback"} element={<LoginCallback />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
