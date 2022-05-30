import { Button } from "@mui/material";
import { BackButton } from "./BackButton";
import { useNavigate } from "react-router";
import { SubscriptionInfoGrid } from "./SubscriptionInfoGrid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

export const SelectSubscription = (props) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  const navigate = useNavigate();

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
              props.handleClick("freemium");
              navigate("/register-summary");
            }}
            sx={{
              justifyContent: "space-between",
              mb: "22px",
              borderColor: "#637381",
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
            endIcon={"$ 0.00 / per month"}
          >
            Get Freemium
          </Button>
          <Button
            onClick={() => {
              console.log("premium");
              props.handleClick("premium");
              navigate("/select-payment-method");
            }}
            sx={{
              justifyContent: "space-between",
              mb: "22px",
              borderColor: "#A400FF",
              backgroundColor: "#F6E8FF",
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
    </div>
  );
};
