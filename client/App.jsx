import Sidebar from "./components/navigation/Sidebar";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/articles/Article";
import DiscoverPage from "./components/discover/DiscoverPage";
import Partners from "./components/our_partners/OurPartnersPage";
import { LoginPage } from "./components/login/LoginPage";
import { LoginOpenIDStep } from "./components/login/LoginOpenIDStep";
import { CookiesProvider, useCookies } from "react-cookie";
import React from "react";
import { useLoader } from "./helpers/UseLoader";
import fetchJSON from "./helpers/fetchJSON";
import { Box, CircularProgress } from "@mui/material";
import OurPartnersPage from "./components/our_partners/OurPartnersPage";
import NonProfitProfilePage from "./components/non-profit-page/NonProfitProfilePage";
import Login from "./pages/Login";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./pages/app.css";


function App() {
  const [user, setUser] = useState(null);
  console.log(user);

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
          console.log("Setuser line")
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);


  return (
    <div>

      <header>
        <Navbar user={user} />
      </header>
      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>

    </div>
  );


  /*
  return (
    <div className="app-container">
      <CookiesProvider>
        <div>
          <Sidebar />
        </div>

        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/articles" element={<ArticlesPage />} />
          <Route exact path="/articles/article" element={<Article />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/our-partners" element={<OurPartnersPage />} />
          <Route
            exact
            path="/npo-profile/id"
            element={<NonProfitProfilePage />}
          />
          <Route
            path="/login"
            element={user ? <Sidebar to="/" /> : <Sidebar />}
          />
          <Route exact path="/wrapped" element={<Partners />} />
          <Route exact path="/templates" element={<Partners />} />
        </Routes>
      </CookiesProvider>
    </div>
  );

   */
}

export default App;
