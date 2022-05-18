import GoogleIcon from "../../media/google_icon.png";
import "../../styles/loginPage-styles.css";

import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginLeftCard } from "./LoginLeftCard";
import { useEffect, useState } from "react";
import { FormTermsOfServiceText } from "./FormTermsOfServiceText";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isBreakpoint, setIsBreakpoint] = useState(false);
  window.addEventListener("resize", () => {
    setIsBreakpoint(window.innerWidth >= 1000);
  });

  return (
    <div className="login-page-container">
      {isBreakpoint && <LoginLeftCard />}
      <div className="login-container">
        <div className={"login-content"}>
          <div>
            {isRegistered ? (
              <div>
                <h2>Login</h2>
                <p>Log in with:</p>
              </div>
            ) : (
              <div>
                <h2>Get started for absolutely free</h2>{" "}
                <p>Create account with:</p>
              </div>
            )}
            <div>
              <Link to="/login-google" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    mb: "22px",
                    borderColor: "#637381",
                    "&:hover": {
                      borderColor: "#000",
                      backgroundColor: "#FFF",
                      color: "#637381",
                    },
                  }}
                  fullWidth
                  variant={"outlined"}
                  size={"large"}
                >
                  <img
                    style={{ height: "25px" }}
                    src={GoogleIcon}
                    alt="GoogleIcon"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <Divider style={{ width: "100%" }}>OR</Divider>
          <form className="login-form">
            {isRegistered ? <LoginForm /> : <RegisterForm />}
          </form>
          <FormTermsOfServiceText />
        </div>
      </div>
    </div>
  );
};
