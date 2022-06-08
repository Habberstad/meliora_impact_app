import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";
import BankIdIcon from "../../media/bankid_icon.png";
import MicrosoftIcon from "../../media/microsoft_icon.png";
import { identificationButtonStyle } from "./login-styles";

export const SelectIdentificationMethod = (props) => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <div className={"login-content-header"}>
        <div>
          Get started for <br />
          free today!
        </div>
        <p>
          Please select an <strong>identification</strong> method
        </p>
      </div>
      <div className={"login-content-main"}>
        <Button
          sx={identificationButtonStyle}
          fullWidth
          variant={"outlined"}
          onClick={() => {
            props.google();
          }}
        >
          <img style={{ height: "40px" }} src={GoogleIcon} alt="GoogleIcon" />
        </Button>
        <Button
          disabled
          onClick={() => {
            navigate("/register-form");
          }}
          sx={{ ...identificationButtonStyle, opacity: "0.5" }}
          fullWidth
          variant={"outlined"}
        >
          <img
            style={{ height: "40px", width: "30%", objectFit: "cover" }}
            src={BankIdIcon}
            alt="BankIdIcon"
          />
        </Button>

        <Button
          disabled
          onClick={() => {
            navigate("/register-form");
          }}
          sx={{ ...identificationButtonStyle, opacity: "0.5" }}
          fullWidth
          variant={"outlined"}
        >
          <img
            style={{ height: "40px" }}
            src={MicrosoftIcon}
            alt="MicrosoftIcon"
          />
        </Button>
        <Button
          onClick={() => {
            navigate("/register-form");
          }}
          sx={identificationButtonStyle}
          fullWidth
          variant={"outlined"}
        >
          Register Manually
        </Button>
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Already got an account?
        <Link to={"/login-form"}> Log in here</Link>
      </p>
    </div>
  );
};
