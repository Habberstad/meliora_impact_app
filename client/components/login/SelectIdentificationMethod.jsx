import { BackButton } from "./BackButton";
import { Button } from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";
import BankIdIcon from "../../media/bankid_icon.png";
import MicrosoftIcon from "../../media/microsoft_icon.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  identificationButtonStyle,
  identificationButtonStyleDisabled,
} from "./login-styles";

export const SelectIdentificationMethod = (props) => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <div className={"login-content-header"}>
        <div>
          Get started for <br></br>free today!
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
          size={"large"}
          onClick={() => {
            props.google();
          }}
        >
          <img style={{ height: "40px" }} src={GoogleIcon} alt="GoogleIcon" />
        </Button>
        <Button
          onClick={() => {
            navigate("/register-form");
          }}
          disabled={true}
          sx={identificationButtonStyleDisabled}
          fullWidth
          variant={"outlined"}
          size={"large"}
        >
          <img
            style={{ height: "40px", width: "30%", objectFit: "cover" }}
            src={BankIdIcon}
            alt="BankIdIcon"
          />
        </Button>

        <Button
          onClick={() => {
            navigate("/register-form");
          }}
          sx={identificationButtonStyleDisabled}
          fullWidth
          variant={"outlined"}
          size={"large"}
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
          size={"large"}
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
