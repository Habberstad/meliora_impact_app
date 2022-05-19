import Sidebar from "./components/navigation/Sidebar";
import {
  Outlet,
  Route,
  Routes
} from "react-router-dom";
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


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser()
  }, []);

  console.log(user)
  if(user === null){
    return (
      <div>
        <LoginPage/>
      </div>
    );
  }

  return (
    <div className="app-container">
      <UserContext.Provider value={user}>
        <div>
          { <Sidebar user={user}/>}
        </div>
        <Outlet />

        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/articles" element={<ArticlesPage />} />
          <Route exact path="/articles/article" element={<Article />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/our-partners" element={<OurPartnersPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/npo-profile/id"
            element={<NonProfitProfilePage />}
          />
          <Route exact path="/wrapped" element={<Partners />} />
          <Route exact path="/templates" element={<Partners />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

const UserContext = React.createContext({
  Account: user => { }
,});

export default App;
