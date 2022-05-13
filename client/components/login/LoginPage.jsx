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

export const LoginPage = () => {
  return (
    <div className="login-page-container">
      <LoginLeftCard />
      <div className="login-container">
        <div className={"login-content"}>
          <div>
            <div>
              <h2>Login</h2>
              <p>Log in with:</p>
            </div>
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
                label="Email adress"
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
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
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
          </form>
          <div className={"bottom-text-container"}>
            <p className={"bottom-text"}>
              By registering, I agree to Minimal
              <strong> Terms of Service</strong> and
              <strong> Privacy Policy.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
