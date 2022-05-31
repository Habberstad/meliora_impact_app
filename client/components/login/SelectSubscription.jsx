import { Button } from "@mui/material";
import { BackButton } from "./BackButton";
import { useNavigate } from "react-router";
import { SubscriptionInfoGrid } from "./SubscriptionInfoGrid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import {
  selectedSubsciptionTypeFreemium,
  subscriptionTypeFreemium,
  selectedSubsciptionTypePremium,
  subscriptionTypePremium,
  submitButtonStyle,
} from "./login-styles";

export const SelectSubscription = (props) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState(
    props.subscriptionType
  );

  const navigate = useNavigate();

  const handleSubscriptionSelect = (subscription) => {
    setSubscriptionType(subscription);
  };

  const handleSubscriptionSubmit = () => {
    props.handleSubmit(subscriptionType);

    subscriptionType === "premium"
      ? navigate("/select-payment-method")
      : navigate("/register-summary");
  };

  return (
    <div className="select-subscription-container">
      <div className={"login-content"}>
        <BackButton className={"login-back-button"} />
        <div className={"login-content-header"}>
          <div>Philanthropy is everything</div>
          <p>Get started for free </p>
          <p style={{ fontStyle: "italic" }}>or</p>
          <p>
            get access to <strong>all</strong> our extended features as a
            <strong> Meliora Partner</strong>
          </p>
        </div>
        <div className="login-content-main">
          <Button
            onClick={() => {
              handleSubscriptionSelect("freemium");
            }}
            sx={
              subscriptionType === "freemium"
                ? selectedSubsciptionTypeFreemium
                : subscriptionTypeFreemium
            }
            fullWidth
            variant={"outlined"}
            size={"large"}
            endIcon={"$ 0.00 / per month"}
          >
            Get Freemium
          </Button>
          <Button
            onClick={() => {
              handleSubscriptionSelect("premium");
            }}
            sx={
              subscriptionType === "premium"
                ? selectedSubsciptionTypePremium
                : subscriptionTypePremium
            }
            fullWidth
            variant={"outlined"}
            size={"large"}
          >
            <div>Get Meliora Partner</div>
            <div>$ 7.99 / per month</div>
          </Button>
        </div>

        <Button
          onClick={() => {
            setIsShowingInfo(!isShowingInfo);
          }}
          sx={{
            textDecoration: "underline",
            padding: "0",
            mb: "22px",
            color: "#000",
            "&:hover": {
              color: "#637381",
            },
          }}
          fullWidth
          variant={"text"}
          size={"large"}
          endIcon={
            isShowingInfo ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          What do you get?
        </Button>
      </div>
      <div className={"subscription-type-information-container"}>
        {isShowingInfo && <SubscriptionInfoGrid />}
      </div>
      <Button
        disabled={!subscriptionType}
        onClick={handleSubscriptionSubmit}
        sx={{ ...submitButtonStyle, marginTop: "30px" }}
        variant="contained"
      >
        Next
      </Button>
    </div>
  );
};
