import MelioraIcon from "../../media/meliora_logo.png";
import LoginCardImage from "../../media/login_card_img.png";
import GoogleIcon from "../../media/google_icon.png";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-left-card">
        <img
          className="login-left-card-icon"
          src={MelioraIcon}
          alt="company-icon"
        />
        <div className="login-left-card-content">
          <h1>Meliora Connect</h1>
          <h1>Together We Can Change The World</h1>
          <img src={LoginCardImage} alt="company-icon" />
        </div>
      </div>
      <div className="login-container">
        <div className={"login-content"}>
          <div>
            <div>
              <h2>login</h2>
              <p>Log in with:</p>
            </div>
            <div>
              <Link to="/login-google" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ mb: "22px" }}
                  fullWidth
                  variant={"outlined"}
                  size={"large"}
                  onClick={() => {
                    use;
                  }}
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
                sx={{ mt: "22px" }}
                label="Email adress"
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{ my: "22px" }}
                label="Password"
                variant="outlined"
              />
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <a href={"/"}>Forgot password?</a>
              </FormGroup>
              <Button
                className={"form-button"}
                sx={{ mt: 1 }}
                variant="contained"
                size="large"
              >
                Log in
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};
