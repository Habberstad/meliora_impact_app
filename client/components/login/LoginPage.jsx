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
import { PostLoginIntroSelection } from "./PostLoginIntroSelection";
import { LoginCard } from "./login-styles";

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
  const [paymentOption, setPaymentOption] = useState("");
  const [isOverBreakpoint, setIsOverBreakpoint] = useState(true);
  const [user, setUser] = useState(null);
  const [userName, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [cookies, setCookies] = useState(null);

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
    console.log("company handler", name, orgNumber);
  };

  const handleSubmit = () => {
    //maybe async?
    console.log({
      org_name: orgName,
      org_number: orgNumber,
      payment_option: paymentOption,
      subscription_type: subscriptionType,
      address: orgAdress,
      postal_code: orgPostalCode,
      city: orgCity,
    });
    registerUser({
      org_name: orgName,
      org_number: orgNumber,
      payment_option: paymentOption,
      subscription_type: subscriptionType,
      address: orgAdress,
      postal_code: orgPostalCode,
      city: orgCity,
      email: userEmail,
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
          setUser(resObject.user);
          setUsername(resObject.user.displayName);
          setUserEmail(resObject.user._json.email);
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
      <div sx={LoginCard}>
        <Link to={"/find-company"}>company</Link>
      </div>
      <div className="login-container">
        <Routes>
          <Route
            exact
            path={"/"}
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
