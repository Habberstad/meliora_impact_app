import { Button, Checkbox, Tooltip } from "@mui/material";
import { reviewContainer, submitButtonStyle } from "./login-styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BackButton } from "./BackButton";

export const RegistrationSummary = (props) => {
  const handleSubmit = () => {
    props.handleSubmit();
  };

  let isNotCompleted =
    !props.userName ||
    !props.userEmail ||
    !props.orgName ||
    !props.orgAdress ||
    !props.subscriptionType ||
    props.isPrivacyConsent === false;

  return (
    <div className="login-content">
      <BackButton />
      <div className="login-content-header">
        <div>
          Welcome to <br /> Meliora Impact!
        </div>
        <p>We're glad to have you onboard!</p>
        <p>Please ensure that the following information is correct</p>
      </div>
      <div className={"login-content-main"} style={reviewContainer}>
        <div>
          <h4>Admin</h4>
          <p>{props.userName}</p>
          <p>{props.userEmail}</p>
          <h4>Company</h4>
          <p>{props.orgName}</p>
          <p>{props.orgAdress}</p>
          <h4>Subscription</h4>
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
            <p>FREE</p>
          ) : (
            <p>
              {props.paymentOption.toUpperCase()}
              <br />$ 7.99 / PER MONTH
            </p>
          )}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={props.isPrivacyConsent}
          onChange={props.privacyConsentHandler}
        />
        <div>
          By signing up, I consent to my user information provided by Google
          (name and email), to be handled and stored by student group 38 for the
          duration of Høyskolen Kristiania - PRO201-1 21H, including evaluation.
        </div>
      </div>

      <Tooltip
        style={{ display: "flex", justifyContent: "center" }}
        title={
          isNotCompleted
            ? "You have not provided all required information. Please go back and provide the missing information!"
            : ""
        }
        leaveDelay={1000}
      >
        <span>
          <Button
            disabled={isNotCompleted}
            onClick={handleSubmit}
            sx={submitButtonStyle}
            variant="contained"
          >
            Confirm
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};
