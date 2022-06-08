import { BackButton } from "./loginCommonComponents/BackButton";
import { Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  paymentImage,
  paymentMethod,
  selectedPaymentMethod,
} from "./login-styles";
import { LoginNextButtonB41 } from "../../styles/button-style-config";
import vippsLogo from "../../media/vipps.svg";
import paypalLogo from "../../media/paypal.svg";
import klarnaLogo from "../../media/klarna.svg";
import visaLogo from "../../media/visa.svg";

export const SelectPaymentMethod = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.paymentOption);
  const navigate = useNavigate();
  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handlePaymentTypeSubmit = () => {
    props.handleSubmit(selectedOption);
    navigate("/register-summary");
  };

  return (
    <div className="login-content">
      <BackButton />
      <div className={"login-content-header"}>
        <div>Payment method</div>
        <div
          className={`login-content-header-subscription-tag ${
            props.subscriptionType === "premium" ? "premium" : "freemium"
          }`}
        >
          <p>
            {props.subscriptionType === "premium"
              ? "Meliora Partner"
              : "Freemium"}
          </p>
          <CheckCircleIcon />
        </div>
        <p>
          Welcome, <strong>{props.orgName}</strong>!
        </p>
        <p>Please select your preferred payment method</p>
        <p style={{ fontSize: "14px", fontStyle: "italic", marginTop: "20px" }}>
          {props.subscriptionType === "premium"
            ? ""
            : "You will not be charged monthly with the Freemium subscription.\n " +
              "Credentials are still required for single donations."}
        </p>
      </div>
      <div className={"payment-options-container"}>
        <Button
          sx={
            selectedOption === "klarna" ? selectedPaymentMethod : paymentMethod
          }
          onClick={() => handleChange("klarna")}
        >
          <img style={paymentImage} src={klarnaLogo} alt="klarna" />
        </Button>
        <Button
          sx={
            selectedOption === "vipps" ? selectedPaymentMethod : paymentMethod
          }
          onClick={() => handleChange("vipps")}
        >
          <img style={paymentImage} src={vippsLogo} alt="vipps" />
        </Button>
        <Button
          sx={
            selectedOption === "paypal" ? selectedPaymentMethod : paymentMethod
          }
          onClick={() => handleChange("paypal")}
        >
          <img style={paymentImage} src={paypalLogo} alt="paypal" />
        </Button>
        <Button
          sx={selectedOption === "visa" ? selectedPaymentMethod : paymentMethod}
          onClick={() => handleChange("visa")}
        >
          <div>
            <img style={paymentImage} src={visaLogo} alt="visa" />
          </div>
        </Button>
      </div>
      <Tooltip
        style={{ display: "flex", justifyContent: "center" }}
        title={!selectedOption ? "Select a payment method" : ""}
        leaveDelay={1000}
      >
        <span>
          <Button
            disabled={!selectedOption}
            onClick={handlePaymentTypeSubmit}
            sx={{ ...LoginNextButtonB41, marginTop: "50px" }}
            variant="contained"
          >
            Next
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};
