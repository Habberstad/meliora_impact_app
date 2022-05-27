import { Button } from "@mui/material";
import { BackButton } from "./BackButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export const SelectSubscription = (props) => {
  const navigate = useNavigate();

  return (
    <div className={"login-content"}>
      <BackButton />
      <div>
        <h1>Philanthropy is everything</h1>
        <p>Get started for free </p>
        <p>Or</p>
        <p>get access to all our extended features as a Meliora Partner</p>
      </div>

      <Button
        onClick={() => {
          console.log("Fremium");
          props.handleClick("freemium");
          navigate("/select-payment-method");
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
        premium
      </Button>
    </div>
  );
};
