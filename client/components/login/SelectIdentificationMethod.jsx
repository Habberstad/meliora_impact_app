import { BackButton } from "./BackButton";
import { Button } from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";
import BankIdIcon from "../../media/bankid_icon.png";
import MicrosoftIcon from "../../media/microsoft_icon.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const SelectIdentificationMethod = (props) => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <div className={"login-content-header"}>
        {/*Todo maybe change headers here if this is the first thing the user meets*/}
        <div>
          Get started for <br></br>free today!
        </div>
        <p>
          Please select an <strong>identification</strong> method
        </p>
      </div>
      <div className={"login-content-main"}>
        <Button
          onClick={() => {
            navigate("/register-form");
          }}
          sx={{
            justifyContent: "center",
            mb: "22px",
            borderColor: "#464D51",
            color: "#000",
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
            style={{ height: "40px", width: "30%", objectFit: "cover" }}
            src={BankIdIcon}
            alt="BankIdIcon"
          />
        </Button>
        <Button
          sx={{
            mb: "22px",
            borderColor: "#464D51",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "#FFF",
              color: "#637381",
            },
          }}
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
          sx={{
            mb: "22px",
            borderColor: "#464D51",
            color: "#000",
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
            style={{ height: "40px" }}
            src={MicrosoftIcon}
            alt="MicrosoftIcon"
          />
        </Button>
        <Button
          onClick={() => {
            navigate("/register-form");
          }}
          sx={{
            height: "56px",
            mb: "22px",
            borderColor: "#464D51",
            color: "#000",
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
          Register Manually
        </Button>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Already got an account? <Link to={"/login-form"}> Log in here.</Link>
      </p>
    </div>
  );
};
