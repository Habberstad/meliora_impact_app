import "../../styles/loginPage-styles.css";

import { Routes, useNavigate } from "react-router";
import { LoginLeftCard } from "./LoginLeftCard";
import { useContext, useEffect, useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { Route } from "react-router-dom";
import { SelectSubscription } from "./selectSubscription/SelectSubscription";
import { FindCompany } from "./FindCompany/FindCompany";
import { SelectPaymentMethod } from "./SelectPaymentMethod";
import { SelectIdentificationMethod } from "./SelectIdentificationMethod";
import { UserApiContext } from "../../api-client/userApiContext";
import { RegistrationSummary } from "./RegistrationSummary";
import { PostLoginIntroSelection } from "./PostLoginIntroSelection";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserApiContext);
  const [orgName, setOrgName] = useState("");
  const [orgNumber, setOrgNumber] = useState("");
  const [fullOrgAdress, setFullOrgAdress] = useState("");
  const [orgAdress, setOrgAdress] = useState("");
  const [orgPostalCode, setOrgPostalCode] = useState("");
  const [orgCity, setOrgCity] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [paymentOption, setPaymentOption] = useState("none");
  const [isOverBreakpoint, setIsOverBreakpoint] = useState(true);
  const [userName, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isPrivacyConsent, setIsPrivacyConsent] = useState(false);

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

  const privacyConsentHandler = () => {
    setIsPrivacyConsent((prevState) => !prevState);
  };

  const handleCompanyInfo = (
    name,
    orgNumber,
    fullAdress,
    adress,
    postalCode,
    city
  ) => {
    setOrgName(name);
    setOrgNumber(orgNumber);
    setOrgAdress(adress);
    setOrgPostalCode(postalCode);
    setOrgCity(city);
    setFullOrgAdress(fullAdress);
  };

  const handleSubmit = () => {
    registerUser({
      org_name: orgName,
      org_number: orgNumber,
      payment_option: paymentOption,
      subscription_type: subscriptionType,
      address: orgAdress,
      postal_code: orgPostalCode,
      city: orgCity,
      email: userEmail,
      privacy_consent: isPrivacyConsent,
    });
    navigate("/post-login");
  };

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
          setUsername(resObject.user.displayName);
          setUserEmail(resObject.user._json.email);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="login-page-container">
      {isOverBreakpoint && <LoginLeftCard />}

      <div className="login-container">
        <Routes>
          <Route
            exact
            path={"/"}
            element={<SelectIdentificationMethod google={google} />}
          />
          <Route
            exact
            path={"/*"}
            element={<SelectIdentificationMethod google={google} />}
          />
          <Route
            exact
            path={"/login-form"}
            element={<LoginForm google={google} />}
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
                userName={userName}
                userEmail={userEmail}
                orgName={orgName}
                orgNumber={orgNumber}
                orgAdress={fullOrgAdress}
                paymentOption={paymentOption}
                subscriptionType={subscriptionType}
                isPrivacyConsent={isPrivacyConsent}
                privacyConsentHandler={privacyConsentHandler}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            exact
            path={"/post-login"}
            element={
              <PostLoginIntroSelection
                subscriptionType={subscriptionType}
                google={google}
              />
            }
          />
          <Route exact path={"/register-form"} element={<RegisterForm />} />
        </Routes>
      </div>
    </div>
  );
};
