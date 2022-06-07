import { Box, Button, Modal, Tooltip } from "@mui/material";
import { BackButton } from "./BackButton";
import { useNavigate } from "react-router";
import { SubscriptionInfoModal } from "./SubscriptionInfoModal";
import { useState } from "react";
import {
  selectedSubscriptionTypeFreemium,
  subscriptionTypeFreemium,
  selectedSubscriptionTypePremium,
  subscriptionTypePremium,
  subscriptionFeaturesButton,
} from "./login-styles";
import { LoginNextButtonB41 } from "../../styles/button-style-config";
import * as React from "react";
import {
  modalStyle,
  selectSubscriptionModalStyle,
} from "../wrapped/modal-style";

export const SelectSubscription = (props) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState(
    props.subscriptionType
  );

  const [infoModal, setInfoModal] = React.useState(false);
  const infoModalHandleOpen = () => setInfoModal(true);
  const infoModalHandleClose = () => setInfoModal(false);

  const navigate = useNavigate();

  const handleSubscriptionSelect = (subscription) => {
    setSubscriptionType(subscription);
  };

  const handleSubscriptionSubmit = () => {
    props.handleSubmit(subscriptionType);

    subscriptionType === "premium"
      ? navigate("/select-payment-method")
      : navigate("/select-payment-method");
  };

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
              handleSubscriptionSelect("freemium");
            }}
            sx={
              subscriptionType === "freemium"
                ? selectedSubscriptionTypeFreemium
                : subscriptionTypeFreemium
            }
            fullWidth
            variant={"outlined"}
            size={"large"}
          >
            <div className={"freemium-button"}>
              <h3>Get Freemium</h3>
              <div>
                <div style={{ textAlign: "left" }}>Basic features</div>
              </div>
            </div>

            <div>
              <strong>$ 0.00</strong> / per month
              <div style={{ textAlign: "left" }}>Only 1 user</div>
            </div>
          </Button>
          <Button
            onClick={() => {
              handleSubscriptionSelect("premium");
            }}
            sx={
              subscriptionType === "premium"
                ? selectedSubscriptionTypePremium
                : subscriptionTypePremium
            }
            fullWidth
            variant={"outlined"}
            size={"large"}
          >
            <div className={"partner-button"}>
              <h3>Get Meliora Partner</h3>
              <div>
                <div style={{ textAlign: "left" }}>Exclusive features</div>
              </div>
            </div>

            <div>
              <strong>$ 7.99</strong> / per month
              <div style={{ textAlign: "left" }}>Up to 10 users</div>
            </div>
          </Button>
        </div>

        <Button
          onClick={() => {
            infoModalHandleOpen();
          }}
          sx={subscriptionFeaturesButton}
          fullWidth
          variant={"text"}
          size={"large"}
        >
          What do you get?
        </Button>
        <Modal open={infoModal} onClose={infoModalHandleClose}>
          <Box sx={selectSubscriptionModalStyle} style={{ width: 800 }}>
            <div className="select-subscription-modal">
              Which features can we offer?
            </div>
            <SubscriptionInfoModal />
          </Box>
        </Modal>
      </div>

      <Tooltip
        title={!subscriptionType ? "Select a subscription plan" : ""}
        leaveDelay={1500}
      >
        <span>
          <Button
            disabled={!subscriptionType}
            onClick={handleSubscriptionSubmit}
            sx={{ ...LoginNextButtonB41, marginTop: "30px" }}
            variant="contained"
          >
            Next
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};
