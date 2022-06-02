import "../../styles/template-styles/template-styles.css";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Tooltip,
} from "@mui/material";
import { useContext, useRef, useState } from "react";
import { GlobalHeader } from "../headers/GlobalHeader";
import { useLoader } from "../../helpers/UseLoader";
import { UserApiContext } from "../../api-client/userApiContext";
import { isLoading } from "../shared-components/Loading";
import FormatStep from "./FormatStep";
import CustomizeStep from "./CustomizeStep";
import ReviewStep from "./ReviewStep";
import ContentStep from "./ContentStep";
import {
  backPlatformButton,
  purplePlatformButton,
} from "../../styles/button-style-config";
import { useReactToPrint } from "react-to-print";
import * as React from "react";
import { modalStyle } from "../wrapped/modal-style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const steps = ["Content", "Format", "Customize", "Review"];

const MediaTemplatePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [npoList, setNpoList] = useState();
  const [projectList, setProjectList] = useState();
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
    if (shareLink == "") alert("Unavailable");
    else open(shareLink);
  };

  const { loading, error, data } = useLoader(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();

  console.log("getCurrentUser", data);

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;

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
    <div className="template-main-container">
      <div className="template-header-container">
        <div style={{ marginTop: "60px", marginLeft: "74px" }}>
          <div className="template-header-main-title">
            Generate Social Media Templates
          </div>
          <div className="template-header-sub-title">
            <strong>Create</strong> modern and stunning content with our unique
            templates, designed by proffesionals.
          </div>
        </div>
      </div>
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
                "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
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
            <ContentStep handleNext={handleNext} npoList={data.npo_partners} />
          )}
          {activeStep === 1 && <FormatStep />}
          {activeStep === 2 && <CustomizeStep />}
          {activeStep === 3 && <ReviewStep ref={componentRef} />}
        </div>
        <div style={{ margin: "25px" }}>
          {activeStep === 0 ? null : (
            <>
              <Button
                sx={backPlatformButton}
                onClick={handleBack}
                disabled={activeStep === 0}
                variant="outlined"
              >
                Back
              </Button>
              {activeStep === 3 ? (
                <>
                  <Button onClick={shareHandleOpen} sx={purplePlatformButton}>
                    Share
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  sx={purplePlatformButton}
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </>
          )}
        </div>

        <Modal open={share} onClose={shareHandleClose}>
          <Box sx={modalStyle}>
            <div className="meliora-wrapped-share-modal">
              <h1>Share</h1>
              <div className="meliora-wrapped-share-modal-buttons">
                <Button
                  variant={"outlined"}
                  onClick={() => {
                    setSharePlaceholder(linkedInPlaceholder);
                    setShareLink(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedAhref}`
                    );
                    console.log(shareLink);
                  }}
                >
                  <div>
                    <LinkedInIcon sx={{ fontSize: 50 }} />
                  </div>
                </Button>
                <Button
                  variant={"outlined"}
                  onClick={() => {
                    setSharePlaceholder(twitterPlaceholder);
                    setShareLink(
                      `https://twitter.com/intent/tweet?url=${encodedAhref}`
                    );
                    console.log(shareLink);
                  }}
                >
                  <div>
                    <TwitterIcon sx={{ fontSize: 50 }} />
                  </div>
                </Button>
                <Button
                  variant={"outlined"}
                  onClick={() => {
                    setSharePlaceholder(facebookPlaceholder);
                    setShareLink(
                      `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
                    );
                    console.log(shareLink);
                  }}
                >
                  <div>
                    <FacebookIcon sx={{ fontSize: 50 }} />
                  </div>
                </Button>
                <Tooltip
                  title={"Not available at this moment!"}
                  placement="top"
                >
                  <Button
                    variant={"outlined"}
                    onClick={() => {
                      setSharePlaceholder(instagramPlaceholder);
                      setShareLink(``);
                      console.log(shareLink);
                    }}
                  >
                    <div>
                      <InstagramIcon sx={{ fontSize: 50 }} />
                    </div>
                  </Button>
                </Tooltip>
              </div>
              <TextField
                className="meliora-wrapped-share-modal-textfield"
                disabled={true}
                placeholder={sharePlaceholder}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title={
                          copiedText === sharePlaceholder
                            ? "Copied!"
                            : "Copy To Clipboard"
                        }
                        placement="top"
                      >
                        <IconButton
                          onClick={() => {
                            navigator.clipboard.writeText(sharePlaceholder);
                            setCopiedText(sharePlaceholder);
                          }}
                        >
                          <ContentCopyIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="meliora-wrapped-share-modal-buttons-bot">
                <Button
                  variant={"contained"}
                  sx={purplePlatformButton}
                  style={{ margin: "20px 5px 0px 0px" }}
                  onClick={handlePrint}
                >
                  Download
                </Button>
                <Button
                  variant={"contained"}
                  sx={purplePlatformButton}
                  style={{ margin: "20px 0px 0px 5px" }}
                  onClick={handleShare}
                >
                  Share
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default MediaTemplatePage;
