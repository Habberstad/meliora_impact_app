import "../../styles/loginPage-styles.css";

import { Routes } from "react-router";
import { LoginLeftCard } from "./LoginLeftCard";
import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { Link, Route } from "react-router-dom";
import { SelectSubscription } from "./SelectSubscription";
import { FindCompany } from "./FindCompany";
import { SelectPaymentMethod } from "./SelectPaymentMethod";
import { SelectIdentificationMethod } from "./SelectIdentificationMethod";

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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to={"/login-form"}>login</Link>
        <Link to={"/select-subscription"}>select</Link>
        <Link to={"/find-company"}>company</Link>
        <Link to={"/select-payment-method"}>payment</Link>
        <Link to={"/select-identification-method"}>identity</Link>
      </div>
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
          <Route exact path={"/find-company"} element={<FindCompany />} />
          <Route
            exact
            path={"/select-payment-method"}
            element={<SelectPaymentMethod />}
          />
          <Route
            exact
            path={"/select-identification-method"}
            element={<SelectIdentificationMethod />}
          />
          <Route exact path={"/register-form"} element={<RegisterForm />} />
        </Routes>
      </div>
    </div>
  );
};
