import GoogleIcon from "../../media/google_icon.png";
import "../../styles/loginPage-styles.css";

import { Link } from "react-router-dom";
import { LoginLeftCard } from "./LoginLeftCard";
import { useEffect, useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

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
        {isRegistered ? <LoginForm google={google} /> : <RegisterForm />}
      </div>
    </div>
  );
};
