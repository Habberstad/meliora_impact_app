import "../../styles/npo-profile-page-styles/npo-profile-styles.css";
import "../../styles/npo-profile-page-styles/overview-styles.css";
import { ProfileHeader } from "./ProfileHeader";
import { useState, useContext } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FlareIcon from "@mui/icons-material/Flare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  allocationDonateButton,
  donateAmountButton,
  greenWidePlatformButton,
  highlightedNavButtonStyle,
  leftPaymentModalFreqBtn,
  leftSelectedPaymentModalFreqBtn,
  navButtonStyle,
  rightPaymentModalFreqBtn,
  rightSelectedPaymentModalFreqBtn,
  selectedDonateAmountButton,
} from "../../styles/button-style-config";
import OverviewTabContent from "./overview-tab/OverviewTabContent";
import Timeline from "./npo-media/timeline_component4x.png";
import ProjectTabPage from "./projects-tab/ProjectTabPage";
import ImpactTabContent from "./impact-tab/ImpactTabContent";
import KeyInformationTab from "./key-information-tab/KeyInformationTab";
import { useLoading } from "../../useLoading";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { donateModalStyle, modalStyle } from "../wrapped/modal-style";
import * as React from "react";
import { SubscriptionApiContext } from "../../api-client/subscriptionApiContext";

const NonProfitProfilePage = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [showModal, setShowModal] = useState(false);
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [formError, setFormError] = useState(false);
  const [invalidCustomAmount, setInvalidCustomAmount] = useState(false);

  const { registerSubscription } = React.useContext(SubscriptionApiContext);

  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const { getNpoById } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(
    async () => await getNpoById(urlPathParam),
    []
  );

  const subscriptionInfo = {
    _id: user.id,
    npo_id: data?._id,
    payment_amount: paymentAmount,
    payment_frequency: paymentFrequency,
  };

  const handleShowModal = () => {
    setPaymentAmount(null);

    setShowModal((prevState) => !prevState);
  };

  const handleUpdatePaymentFrequency = (frequency) => {
    setPaymentFrequency(frequency);
  };

  const handleUpdatePaymentAmount = (event) => {
    setFormError(false);
    setPaymentAmount(event);
  };

  const handleUpdatePaymentCustomAmount = (event) => {
    if (event.target.value < 999) {
      setInvalidCustomAmount(true);
    } else {
      setInvalidCustomAmount(false);
    }
    setPaymentAmount(event.target.value);
  };

  const handleSubmitSubscription = () => {
    if (paymentAmount === null) {
      setFormError(true);
    } else {
      setFormError(false);
    }

    console.log(subscriptionInfo);
    console.log(formError);
    if (!formError && !invalidCustomAmount && paymentAmount != null) {
      registerSubscription(subscriptionInfo);
      console.log("submitting", subscriptionInfo);
      handleShowModal();
    }
  };

  if (loading) return <h1>loading..</h1>;

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  console.log(subscriptionInfo);

  return (
    <div className="main-profile-container">
      <ProfileHeader
        handleShowModal={handleShowModal}
        name={data.name}
        data={data.header_data}
      />

      <div className="tab-navigation-section">
        <Button
          onClick={() => handleNavigationState("overview")}
          variant="contained"
          sx={
            selectedTab === "overview"
              ? highlightedNavButtonStyle
              : navButtonStyle
          }
        >
          <AppsIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">O</span>verview
        </Button>
        <Button
          onClick={() => handleNavigationState("projects")}
          variant="contained"
          sx={
            selectedTab === "projects"
              ? highlightedNavButtonStyle
              : navButtonStyle
          }
        >
          <FlareIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">P</span>rojects
        </Button>
        <Button
          onClick={() => handleNavigationState("impact")}
          variant="contained"
          sx={
            selectedTab === "impact"
              ? highlightedNavButtonStyle
              : navButtonStyle
          }
        >
          <VolunteerActivismIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">I</span>mpact
        </Button>
        <Button
          onClick={() => handleNavigationState("keyinformation")}
          variant="contained"
          sx={
            selectedTab === "keyinformation"
              ? highlightedNavButtonStyle
              : navButtonStyle
          }
        >
          <RemoveRedEyeIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">K</span>ey
          <span className="firstLetterCap"> I</span>nformation
        </Button>
      </div>
      {selectedTab === "overview" && (
        <>
          <div className="timeline-section">
            <img src={Timeline} alt="test" />
          </div>
          <div className="content-container">
            <OverviewTabContent data={data.overview_tab} />
          </div>
        </>
      )}
      {selectedTab === "projects" && (
        <>
          <div className="content-container">
            <ProjectTabPage data={data.projects} />
          </div>
        </>
      )}
      {selectedTab === "impact" && (
        <>
          <div className="content-container">
            <ImpactTabContent />
          </div>
        </>
      )}
      {selectedTab === "keyinformation" && (
        <>
          <div className="content-container">
            <KeyInformationTab />
          </div>
        </>
      )}
      <Modal open={showModal} onClose={handleShowModal}>
        <Box sx={donateModalStyle}>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "30px",
              marginTop: "40px",
            }}
          >
            Become a partner
          </div>
          <div>
            <Button
              variant="contained"
              sx={
                paymentFrequency === "quarterly"
                  ? leftSelectedPaymentModalFreqBtn
                  : leftPaymentModalFreqBtn
              }
              onClick={() => handleUpdatePaymentFrequency("quarterly")}
            >
              Quarterly
            </Button>
            <Button
              sx={
                paymentFrequency === "monthly"
                  ? rightSelectedPaymentModalFreqBtn
                  : rightPaymentModalFreqBtn
              }
              onClick={() => handleUpdatePaymentFrequency("monthly")}
            >
              Monthly
            </Button>
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "40px",
              marginBottom: "10px",
            }}
          >
            Select amount
          </div>
          <div
            style={{
              width: "300px",
              textAlign: "center",
              marginBottom: "10px",
            }}
            className="template-content-subtitle-modal"
          >
            By becoming partner to this non-profit, you commit to a recurring
            contribution
          </div>
          <div>
            <Button
              sx={
                paymentAmount === 1000
                  ? selectedDonateAmountButton
                  : donateAmountButton
              }
              onClick={() => handleUpdatePaymentAmount(1000)}
            >
              1000kr
            </Button>
            <Button
              sx={
                paymentAmount === 2500
                  ? selectedDonateAmountButton
                  : donateAmountButton
              }
              onClick={() => handleUpdatePaymentAmount(2500)}
            >
              2500kr
            </Button>
            <Button
              sx={
                paymentAmount === 5000
                  ? selectedDonateAmountButton
                  : donateAmountButton
              }
              onClick={() => handleUpdatePaymentAmount(5000)}
            >
              5000kr
            </Button>
          </div>
          <div>
            <TextField
              label="Enter custom value"
              color="secondary"
              sx={{
                width: "395px",
                bgcolor: "#FFF",
                borderRadius: "8px",
                border: "0px",
                marginTop: "10px",
                boxShadow:
                  "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.05)",
              }}
              onChange={handleUpdatePaymentCustomAmount}
            />
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "40px",
              marginLeft: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Allocation <div className="badge-style">Coming soon</div>
          </div>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              width: "300px",
              textAlign: "center",
            }}
            className="template-content-subtitle-modal"
          >
            Select how the donation is allocated between the different projects
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px 5px 0 5px",
              }}
            >
              <div className="template-content-subtitle">Project 1</div>
              <Button
                disabled={true}
                style={{ marginTop: "10px" }}
                sx={allocationDonateButton}
              >
                25%
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px 5px 0 5px",
              }}
            >
              <div className="template-content-subtitle">Project 2</div>
              <Button
                style={{ marginTop: "10px" }}
                disabled={true}
                sx={allocationDonateButton}
              >
                25%
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px 5px 0 5px",
              }}
            >
              <div className="template-content-subtitle">Project 3</div>
              <Button
                disabled={true}
                style={{ marginTop: "10px" }}
                sx={allocationDonateButton}
              >
                25%
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px 5px 0 5px",
              }}
            >
              <div className="template-content-subtitle">Project 4</div>
              <Button
                disabled={true}
                style={{ marginTop: "10px" }}
                sx={allocationDonateButton}
              >
                25%
              </Button>
            </div>
          </div>
          <Button
            onClick={handleSubmitSubscription}
            variant="contained"
            style={{ marginTop: "30px" }}
            sx={greenWidePlatformButton}
          >
            Complete
          </Button>
          {formError && (
            <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>
              Please select payment method and amount.
            </div>
          )}
          {invalidCustomAmount && (
            <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>
              The minimum contribution amount is 1000kr.
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default NonProfitProfilePage;
