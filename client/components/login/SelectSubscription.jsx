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
        <BackButton />
        <div className={"login-content-header"}>
          <h3>Philanthropy is everything</h3>
          <p>Get started for free </p>
          <p>Or</p>
          <p>Get access to all our extended features as a Meliora Partner</p>
        </div>
        <div className="login-content-main">
          <Button
            onClick={() => {
              console.log("Fremium");
              props.handleClick("freemium");
              props.sumbit();
            }}
            sx={{
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
            endIcon={"$ 7.99 / per month"}
          >
            Get Meliora Partner
          </Button>
          <Button
            onClick={() => {
              setIsShowingInfo(!isShowingInfo);
            }}
            sx={{
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
              isShowingInfo ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            What do you get?
          </Button>
        </div>
      </div>
      <div className={"subscription-type-information-container"}>
        {isShowingInfo && <SubscriptionInfoGrid />}
      </div>
    </div>
  );
};
