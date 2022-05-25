import GoogleIcon from "../../media/google_icon.png";
import "../../styles/loginPage-styles.css";

import { Routes } from "react-router";
import { LoginLeftCard } from "./LoginLeftCard";
import { useEffect, useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { Link, Route } from "react-router-dom";
import { SelectSubscription } from "./SelectSubscription";

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
      <Link to={"/login-form"}>login</Link>
      <Link to={"/select-subscription"}>select</Link>
      <div className="login-container">
        <Routes>
          <Route
            exact
            path={"/login-form"}
            element={<LoginForm google={google} />}
          />
          <Route exact path={"/register-form"} element={<RegisterForm />} />
          <Route
            exact
            path={"/select-subscription"}
            element={<SelectSubscription />}
          />
          <Route
            exact
            path={"/select-subscription"}
            element={<SelectSubscription />}
          />
        </Routes>
      </div>
    </div>
  );
};
