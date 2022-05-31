import { Button } from "@mui/material";
import { UserApiContext } from "../../api-client/userApiContext";
import { useContext } from "react";
import { submitButtonStyle } from "./login-styles";

export const RegistrationSummary = (props) => {
  const { getCurrentUser } = useContext(UserApiContext);
  const user = getCurrentUser();
  console.log(user);
  /*Todo ask harry if this works*/

  const handleSubmit = () => {
    props.handleSubmit();
  };

  return (
    <div className="login-content">
      <div className="login-content-header">
        <h1>Welcome to Meliora Impact</h1>
        <h3>Check if the information under is correct:</h3>
      </div>
      <div className={"login-content-main"}>
        <h4>Amin</h4>
        <p>navn</p>
        <p>epost</p>
        <h3>Company</h3>
        <p>{props.orgName}</p>
        <p>{props.orgAdress}</p>
        <h4>Account</h4>
        <p>{props.subscriptionType}</p> {/*TODO: replace with tag*/}
        <h4>payment method</h4>
        {props.subscriptionType === "freemium" ? (
          <p>Free</p>
        ) : (
          <p>{props.paymentOption}</p>
        )}
      </div>
      <Button onClick={handleSubmit} sx={submitButtonStyle} variant="contained">
        Confirm
      </Button>
    </div>
  );
};
