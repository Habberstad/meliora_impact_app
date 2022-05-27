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
import { NpoApiContext } from "./api-client/npoApiContext";
import { useLoading } from "./useLoading";
import { isLoading } from "./components/shared-components/Loading";
import { Error } from "./components/shared-components/Error";
import { UserApiContext } from "./api-client/userApiContext";

export const UserContext = React.createContext({

});

function App() {

  const { testGet } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await testGet(),
    []
  );


  if (loading) return isLoading();

  if (error) return <Error error={error} />;


  console.log(data === undefined)
  console.log(data)


  if (data === undefined || data === null) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }

  return (
    <div className="app-container">
      <UserContext.Provider value={data}>
        <div>{ <Sidebar user={data} /> }</div>
        <Outlet />

        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<Dashboard user={data} />} />
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
            element={<MediaTemplatePage user={data} />}
          />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
