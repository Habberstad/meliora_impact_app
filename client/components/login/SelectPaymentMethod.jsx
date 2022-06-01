import { BackButton } from "./BackButton";
import { Button, ButtonGroup, Checkbox, Radio, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  paymentImage,
  paymentMethod,
  selectedPaymentMethod,
  submitButtonStyle,
} from "./login-styles";
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

  const [checked, setChecked] = useState(true);

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
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
        <p>
          Please select your <strong>preferred</strong> payment method
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
          <div>
            <img style={paymentImage} src={paypalLogo} alt="paypal" />
          </div>
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
            sx={submitButtonStyle}
            variant="contained"
          >
            Next
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};
