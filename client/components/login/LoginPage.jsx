import GoogleIcon from "../../media/google_icon.png";
import "../../styles/loginPage-styles.css";

import { Routes } from "react-router";
import { LoginLeftCard } from "./LoginLeftCard";
import { useEffect, useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { Link, Route } from "react-router-dom";

export const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isOverBreakpoint, setIsOverBreakpoint] = useState(true);
  window.addEventListener("resize", () => {
    setIsOverBreakpoint(window.innerWidth >= 1000);
  });

  const google = () => {
    window.open(window.location.origin + "/auth/google", "_self");
  };

  return (
    <div className="login-page-container">
      {isOverBreakpoint && <LoginLeftCard />}
      <div className="login-container">
        <Link to={"/login-form"}>login</Link>
        <Link to={"/register-form"}>register</Link>
        <Routes>
          <Route
            exact
            path={"/login-form"}
            element={<LoginForm google={google} />}
          />
          <Route exact path={"/register-form"} element={<RegisterForm />} />
        </Routes>
      </div>
    </div>
  );
};
