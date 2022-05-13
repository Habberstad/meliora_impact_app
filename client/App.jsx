import Sidebar from "./components/navigation/Sidebar";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/articles/Article";
import DiscoverPage from "./components/discover/DiscoverPage";
import MyNonProfitsPage from "./components/my-non-profits/MyNonProfitsPage";
import { LoginPage } from "./components/login/LoginPage";
import { LoginOpenIDStep } from "./components/login/LoginOpenIDStep";
import { CookiesProvider } from "react-cookie";
import React from "react";

async function fetchPostToken(access_token) {
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ access_token }),
  });
}

function LoginCallback() {
  const navigate = useNavigate();

  useEffect(async () => {
    const { access_token } = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1))
    );
    await fetchPostToken(access_token);

    setTimeout(function () {
      navigate("/articles");
    }, 1000);
  });

  return <h1>Please ...</h1>;
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (window.location.href.toString().includes("/login")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className="app-container">
      <CookiesProvider>
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <Outlet />

        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/articles" element={<ArticlesPage />} />
          <Route exact path="/articles/article" element={<Article />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/my-non-profits" element={<MyNonProfitsPage />} />
          <Route exact path="/wrapped" element={<MyNonProfitsPage />} />
          <Route exact path="/templates" element={<MyNonProfitsPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/login-google" element={<LoginOpenIDStep />} />
          <Route path={"/login/callback"} element={<LoginCallback />} />
        </Routes>
      </CookiesProvider>
    </div>
  );
}

export default App;
