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
import { AccountingPage } from "./components/financials/AccountingPage";
import { TopNavBar } from "./components/navigation/TopNavBar";
import { AccountInformationPage } from "./components/financials/AccountInformationPage";

export const UserContext = React.createContext({
  Account: (user) => {},
});

function App() {
  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

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
        <div>{<Sidebar user={data} />}</div>
        <TopNavBar />
        <Outlet />

        <Routes>
          <Route exact path="/login-page" element={<LoginPage />} />
          <Route exact path="/" element={<Dashboard user={data} />} />
          <Route exact path="/auth/google/production" element={<h1>Home</h1>} />
          <Route exact path="/articles" element={<ArticlesPage />} />
          <Route exact path="/articles/article" element={<Article />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/our-partners" element={<OurPartnersPage user={data} />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/accounting" element={<AccountingPage user={data} />} />
          <Route exact path="/account-information" element={<AccountInformationPage />} />
          <Route
            exact
            path="/npo-profile/*"
            element={<NonProfitProfilePage user={data} />}
          />
          <Route exact path="/wrapped" element={<MelioraWrapped />} />
          <Route
            exact
            path="/templates"
            element={<MediaTemplatePage data={data} />}
          />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
