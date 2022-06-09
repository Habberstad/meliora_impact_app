import "../../styles/template-styles/template-styles.css";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import * as React from "react";
import { useContext, useRef, useState } from "react";
import { useLoader } from "../../helpers/UseLoader";
import { UserApiContext } from "../../api-client/userApiContext";
import { isLoading } from "../shared-components/Loading";
import FormatStep from "./FormatStep";
import CustomizeStep from "./CustomizeStep";
import ReviewStep from "./ReviewStep";
import ContentStep from "./ContentStep";
import {
  CreateTemplateButtonB32,
  ReadMoreButtonB31,
} from "../../styles/button-style-config";
import { useReactToPrint } from "react-to-print";
import { ShareModal } from "../wrapped/ShareModal";
import { GlobalHeader } from "../headers/GlobalHeader";
import headerImg from "../../media/headers/template_header.svg";
const steps = ["Content", "Format", "Customize", "Review"];

const MediaTemplatePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const { getCurrentUser } = useContext(UserApiContext);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [share, setShare] = React.useState(false);
  const shareHandleOpen = () => setShare(true);
  const shareHandleClose = () => setShare(false);

  const facebookPlaceholder = "Share on Facebook...";
  const linkedInPlaceholder = "Share on Linked-in...";
  const twitterPlaceholder = "Share on Twitter...";
  const instagramPlaceholder = "Share on Instagram...";

  const [sharePlaceholder, setSharePlaceholder] = useState(
    "Where would you like to share to?"
  );
  const [copiedText, setCopiedText] = useState();
  const [shareLink, setShareLink] = useState("");

  const handleShare = () => {
    if (shareLink === "") alert("Unavailable");
    else open(shareLink);
  };

  const { loading, error, data } = useLoader(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="template-wrapper">
      <GlobalHeader
        title={"Social Media Templates"}
        subtitle={"Ambitious template generator"}
        desc={
          "Create modern and stunning content for your social media with our unique template generetor, designed and tested by our professionals."
        }
        image={headerImg}
      />
      <div className="template-main-container">
        <div className="template-content-container">
          <div className="template-timeline-container">
            <Box sx={{ width: "800px" }}>
              <Stepper
                sx={{
                  width: "100%",
                  "& .MuiStepConnector-line": {
                    borderColor: "#DA97FE",
                    borderTopWidth: "4px",
                  },
                  "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line":
                    {
                      borderColor: "#551477",
                    },
                  "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line":
                    {
                      borderColor: "#551477",
                    },
                }}
                activeStep={activeStep}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel
                      sx={{
                        "&.MuiStepLabel-root.Mui-active .MuiStepLabel-label": {
                          borderColor: "red",
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
          <div className="template-step-content">
            {activeStep === 0 && (
              <ContentStep
                handleNext={handleNext}
                npoList={data.npo_partners}
              />
            )}
            {activeStep === 1 && <FormatStep />}
            {activeStep === 2 && <CustomizeStep />}
            {activeStep === 3 && <ReviewStep ref={componentRef} />}
          </div>
          <div style={{ margin: "25px" }}>
            {activeStep === 0 ? null : (
              <>
                <Button
                  sx={CreateTemplateButtonB32}
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  variant="outlined"
                >
                  Back
                </Button>
                {activeStep === 3 ? (
                  <>
                    <Button
                      variant={"contained"}
                      onClick={shareHandleOpen}
                      sx={ReadMoreButtonB31}
                    >
                      Share
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    sx={ReadMoreButtonB31}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </>
            )}
          </div>

          <ShareModal
            open={share}
            onClose={shareHandleClose}
            onClick={() => {
              setSharePlaceholder(linkedInPlaceholder);
              setShareLink(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedAhref}`
              );
            }}
            onClick1={() => {
              setSharePlaceholder(twitterPlaceholder);
              setShareLink(
                `https://twitter.com/intent/tweet?url=${encodedAhref}`
              );
            }}
            onClick2={() => {
              setSharePlaceholder(facebookPlaceholder);
              setShareLink(
                `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
              );
            }}
            onClick3={() => {
              setSharePlaceholder(instagramPlaceholder);
              setShareLink(``);
            }}
            placeholder={sharePlaceholder}
            copiedText={copiedText}
            onClick4={() => {
              navigator.clipboard.writeText(sharePlaceholder);
              setCopiedText(sharePlaceholder);
            }}
            onClick5={handlePrint}
            onClick6={handleShare}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaTemplatePage;
