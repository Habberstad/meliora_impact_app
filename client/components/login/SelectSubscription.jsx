import { Button } from "@mui/material";
import { BackButton } from "./BackButton";
import { Link } from "react-router-dom";

export const SelectSubscription = () => {
  /*TODO need to send up state for selected plan*/
  console.log("gegegegfajsdf");
  return (
    <div className={"login-content"}>
      <div>
        <h1>Philanthropy is everything</h1>
        <p>Get started for free </p>
        <p>Or</p>
        <p>get access to all our extended features as a Meliora Partner</p>
      </div>

      <Button
        onClick={() => {
          console.log("Fremium");
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
      <p>
        Already got an account? <Link to={"/login-form"}>Log in here.</Link>
      </p>
    </div>
  );
};
