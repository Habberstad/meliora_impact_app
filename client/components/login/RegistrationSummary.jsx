import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Checkbox, Modal, Tooltip } from "@mui/material";
import { reviewContainer } from "./login-styles";
import { LoginNextButtonB41 } from "../../styles/button-style-config";
import { BackButton } from "./loginCommonComponents/BackButton";
import { useState } from "react";
import { consentAndAuthorityModalStyle } from "../wrapped/modal-style";

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
        <Button onClick={consentHandleOpen}>I hereby consent </Button>
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
      <Modal open={consent} onClose={consentHandleClose}>
        <Box sx={consentAndAuthorityModalStyle}>
          <div className="consent-and-authority-modal-container">
            <h1>Authority and consent</h1>
            <p style={{ fontSize: "18px" }}>
              By signing up, I, <strong> {props.userName}</strong> from{" "}
              <strong> {props.orgName}</strong>, hereby consent that all
              provided information is correct and legitimate.
            </p>
            <p style={{ fontSize: "18px" }}>
              I consent that the account information provided by Google (name,
              email, address and postal code), to be handled and stored by{" "}
              <strong>Student Group 38</strong> for the duration of Høyskolen
              Kristiania - PRO201-1 21H, including evaluation.
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
