import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Checkbox, Tooltip } from "@mui/material";
import { reviewContainer } from "./login-styles";
import { LoginNextButtonB41 } from "../../styles/button-style-config";
import { BackButton } from "./login-common/BackButton";
import { useState } from "react";
import * as PropTypes from "prop-types";
import { ConsentModal } from "./Modals/ConsentModal";

ConsentModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  userName: PropTypes.any,
  orgName: PropTypes.any,
};

export const RegistrationSummary = (props) => {
  const handleSubmit = () => {
    props.handleSubmit();
  };

  const [consent, setConsent] = useState(false);
  const consentHandleOpen = () => setConsent(true);
  const consentHandleClose = () => setConsent(false);

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
        <Button
          onClick={consentHandleOpen}
          sx={{ color: "#000", textTransform: "none" }}
        >
          <p style={{ color: "#000", fontSize: "16px" }}>
            I hereby consent to <strong> these terms and conditions.</strong>
          </p>
        </Button>
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
            sx={{ ...LoginNextButtonB41, marginTop: "50px" }}
            variant="contained"
          >
            Confirm
          </Button>
        </span>
      </Tooltip>
      <ConsentModal
        open={consent}
        onClose={consentHandleClose}
        userName={props.userName}
        orgName={props.orgName}
      />
    </div>
  );
};
