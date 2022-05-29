import { Button } from "@mui/material";
import { BackButton } from "./BackButton";
import { useNavigate } from "react-router";
import { SubscriptionInfoGrid } from "./SubscriptionInfoGrid";

export const SelectSubscription = (props) => {
  const navigate = useNavigate();

  return (
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
          Freeemium
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
          premium
        </Button>
      </div>
      <SubscriptionInfoGrid />
    </div>
  );
};
