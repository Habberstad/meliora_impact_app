import Sidebar from "./components/navigation/Sidebar";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/articles/Article";
import DiscoverPage from "./components/discover/DiscoverPage";
import Partners from "./components/our_partners/OurPartnersPage";
import { LoginPage } from "./components/login/LoginPage";
import { CookiesProvider, useCookies } from "react-cookie";
import React from "react";
import OurPartnersPage from "./components/our_partners/OurPartnersPage";
import NonProfitProfilePage from "./components/non-profit-page/NonProfitProfilePage";
import Dashboard from "./components/dashboard/Dashboard";
import MediaTemplatePage from "./components/media-template/MediaTemplatePage";
import MelioraWrapped from "./components/wrapped/MelioraWrapped";

export const UserContext = React.createContext({
  Account: (user) => {},
});

function App() {
  const [user, setUser] = useState(null);
  const [cookies, setCookies] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch(window.location.origin + "/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setCookies(resObject.cookies);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  if (user === null) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }

  return (
    <div className="app-container">
      <UserContext.Provider value={user}>
        <div>{<Sidebar />}</div>
        <Outlet />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/auth/google/production" element={<h1>Home</h1>} />
          <Route exact path="/articles" element={<ArticlesPage />} />
          <Route exact path="/articles/article" element={<Article />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/our-partners" element={<OurPartnersPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/npo-profile/*"
            element={<NonProfitProfilePage />}
          />
          <Route exact path="/wrapped" element={<MelioraWrapped />} />
          <Route
            exact
            path="/templates"
            element={<MediaTemplatePage user={user} />}
          />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
