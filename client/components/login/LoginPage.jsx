import GoogleIcon from "../../media/google_icon.png";
import "../../styles/loginPage-styles.css";

import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LoginLeftCard } from "./LoginLeftCard";
import { useState } from "react";
import { FormTermsOfServiceText } from "./FormTermsOfServiceText";

export const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className="login-page-container">
      <LoginLeftCard />
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
            {isRegistered ? (
              <FormControl className="login-form">
                <TextField
                  fullWidth
                  sx={{
                    mt: "22px",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.7)",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  label="Email-address"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  sx={{
                    my: "22px",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.7)",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  label="Password"
                  variant="outlined"
                  type="password"
                />
                <FormGroup
                  row
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                  <a href={"/"}>Forgot password?</a>
                </FormGroup>
                <Button
                  className={"form-button"}
                  sx={{
                    mt: 1,
                    backgroundColor: "#A400FF",
                    "&:hover": {
                      backgroundColor: "#aa55d9",
                      color: "#FFF",
                    },
                  }}
                  variant="contained"
                  size="large"
                >
                  Log in
                </Button>
              </FormControl>
            ) : (
              <FormControl className="login-form">
                <FormGroup row>
                  <TextField
                    sx={{
                      mr: "7.5px",
                      width: "calc(50% - 7.5px)",
                      mt: "22px",
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgba(0, 0, 0, 0.7)",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                    label="First name"
                    variant="outlined"
                  />
                  <TextField
                    sx={{
                      ml: "7.5px",
                      width: "calc(50% - 7.5px)",
                      mt: "22px",
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "rgba(0, 0, 0, 0.7)",
                        },
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                    label="Last name"
                    variant="outlined"
                  />
                </FormGroup>
                <TextField
                  fullWidth
                  sx={{
                    mt: "22px",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.7)",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  label="Email-address"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  sx={{
                    my: "22px",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.7)",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  label="Password"
                  variant="outlined"
                  type="password"
                />
                <FormGroup
                  row
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                  <a href={"/"}>Forgot password?</a>
                </FormGroup>
                <Button
                  className={"form-button"}
                  sx={{
                    mt: 1,
                    backgroundColor: "#A400FF",
                    "&:hover": {
                      backgroundColor: "#aa55d9",
                      color: "#FFF",
                    },
                  }}
                  variant="contained"
                  size="large"
                >
                  Log in
                </Button>
              </FormControl>
            )}
          </form>
          <FormTermsOfServiceText />
        </div>
      </div>
    </div>
  );
};
