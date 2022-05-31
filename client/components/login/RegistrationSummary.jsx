import { Button } from "@mui/material";
import { UserApiContext } from "../../api-client/userApiContext";
import { useContext } from "react";
import { reviewContainer, submitButtonStyle } from "./login-styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
        <div>
          Welcome to <br></br> Meliora Impact!
        </div>
        <p>We're glad to have you onboard!</p>
        <p>Please check that the following information is correct</p>
      </div>
      <div className={"login-content-main"} style={reviewContainer}>
        <div>
          <h4>Admin</h4>
          <p>{props.userName}</p>
          <p>{props.userEmail}</p>
          <h4>Company</h4>
          <p>{props.orgName}</p>
          <p>{props.orgAdress}</p>
          <h4>Account</h4>
          <div
            style={{ justifyContent: "start" }}
            className={`login-content-header-subscription-tag ${
              props.subscriptionType === "premium" ? "premium" : "freemium"
            }`}
          >
            <div style={{ paddingRight: "5px" }}>
              {props.subscriptionType === "premium"
                ? "Meliora Partner"
                : "Freemium"}
            </div>
            <CheckCircleIcon />
          </div>
          <h4>Payment method</h4>
          {props.subscriptionType === "freemium" ? (
            <p>Free</p>
          ) : (
            <p>
              {props.paymentOption.toUpperCase()}
              <br></br>$ 7.99 / PER MONTH
            </p>
          )}
        </div>
      </div>
      <Button onClick={handleSubmit} sx={submitButtonStyle} variant="contained">
        Confirm
      </Button>
    </div>
  );
};
