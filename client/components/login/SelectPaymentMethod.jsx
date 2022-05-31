import { BackButton } from "./BackButton";
import { Button, Checkbox, Radio, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { submitButtonStyle } from "./login-styles";

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
        <h1>Payment method</h1>
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
        <div
          className={`payment-option-container ${
            selectedOption === "klarna" && "selected-payment-option"
          }`}
          onClick={() => handleChange("klarna")}
        >
          <img
            src="https://www.elkjop.no/resource/responsive-image/1744350/hero/mobile/3/750/562/ccc-payment-klarna-logo-on-pink-background-mobile.png"
            alt="klarna"
          />
        </div>
        <div
          className={`payment-option-container ${
            selectedOption === "vipps" && "selected-payment-option"
          }`}
          onClick={() => handleChange("vipps")}
        >
          <img
            src="data:image/png;base64,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"
            alt="vipps"
          />
        </div>
        <div
          className={`payment-option-container ${
            selectedOption === "paypal" && "selected-payment-option"
          }`}
          onClick={() => handleChange("paypal")}
        >
          <img
            src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/paypal_logo.jpg"
            alt="paypal"
          />
        </div>
        <div
          className={`payment-option-container ${
            selectedOption === "applepay" && "selected-payment-option"
          }`}
          onClick={() => handleChange("applepay")}
        >
          <img
            src="https://riskconsulting.rs/wp-content/uploads/2014/03/apple-pay-logo.jpg"
            alt="applepay"
          />
        </div>
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
