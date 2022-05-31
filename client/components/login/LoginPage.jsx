import "../../styles/loginPage-styles.css";

import { Routes, useNavigate } from "react-router";
import { LoginLeftCard } from "./LoginLeftCard";
import { useContext, useEffect, useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { Link, Route } from "react-router-dom";
import { SelectSubscription } from "./SelectSubscription";
import { FindCompany } from "./FindCompany";
import { SelectPaymentMethod } from "./SelectPaymentMethod";
import { SelectIdentificationMethod } from "./SelectIdentificationMethod";
import { UserApiContext } from "../../api-client/userApiContext";
import { RegistrationSummary } from "./RegistrationSummary";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserApiContext);
  const [orgName, setOrgName] = useState("");
  const [orgNumber, setOrgNumber] = useState("");
  const [orgAdress, setOrgAdress] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [isOverBreakpoint, setIsOverBreakpoint] = useState(true);
  window.addEventListener("resize", () => {
    setIsOverBreakpoint(window.innerWidth >= 1000);
  });

  const google = () => {
    window.open(window.location.origin + "/auth/google", "_self");
  };

  const handlePaymentType = (option) => {
    setPaymentOption(option);
  };

  const handleSubscriptionType = (option) => {
    setSubscriptionType(option);
  };

  const handleCompanyInfo = (name, orgNumber, adress) => {
    setOrgName(name);
    setOrgNumber(orgNumber);
    setOrgAdress(adress);
    console.log("company handler", name, orgNumber);
  };

  const handleSubmit = () => {
    //maybe async?
    console.log({
      org_name: orgName,
      org_number: orgNumber,
      payment_option: paymentOption,
      subscription_type: subscriptionType,
      adress: orgAdress,
    });
    registerUser({
      org_name: orgName,
      org_number: orgNumber,
      payment_option: paymentOption,
      subscription_type: subscriptionType,
    });
    navigate("/");
  };

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
  console.log(user);

  return (
    <div className="login-page-container">
      {isOverBreakpoint && <LoginLeftCard />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "200px",
          top: "0",
        }}
      >
        <Link to={"/login-form"}>login</Link>
        <Link to={"/select-identification-method"}>identity</Link>
        <Link to={"/find-company"}>company</Link>
        <Link to={"/select-subscription"}>select</Link>
        <Link to={"/select-payment-method"}>payment</Link>
        <Link to={"/register-summary"}>summary</Link>
      </div>
      <div className="login-container">
        <Routes>
          <Route exact path={"/"} element={<LoginForm google={google} />} />
          <Route
            exact
            path={"/login-form"}
            element={<LoginForm google={google} />}
          />
          <Route
            exact
            path={"/select-identification-method"}
            element={<SelectIdentificationMethod google={google} />}
          />
          <Route
            exact
            path={"/register-form"}
            element={<RegisterForm subscriptionType={subscriptionType} />}
          />
          <Route
            exact
            path={"/find-company"}
            element={<FindCompany handleCompanyInfo={handleCompanyInfo} />}
          />
          <Route
            exact
            path={"/select-subscription"}
            element={
              <SelectSubscription
                handleSubmit={handleSubscriptionType}
                subscriptionType={subscriptionType}
                submit={handleSubmit}
              />
            }
          />
          <Route
            exact
            path={"/select-payment-method"}
            element={
              <SelectPaymentMethod
                subscriptionType={subscriptionType}
                paymentOption={paymentOption}
                orgName={orgName}
                handleSubmit={handlePaymentType}
                submit={handleSubmit}
              />
            }
          />
          <Route
            exact
            path={"/register-summary"}
            element={
              <RegistrationSummary
                orgName={orgName}
                orgNumber={orgNumber}
                orgAdress={orgAdress}
                paymentOption={paymentOption}
                subscriptionType={subscriptionType}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route exact path={"/register-form"} element={<RegisterForm />} />
        </Routes>
      </div>
    </div>
  );
};
