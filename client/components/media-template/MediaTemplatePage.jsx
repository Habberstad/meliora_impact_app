import "../../styles/template-styles/template-styles.css";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalHeader } from "../headers/GlobalHeader";
import { useLoader } from "../../helpers/UseLoader";
import { UserApiContext } from "../../api-client/userApiContext";
import { isLoading } from "../shared-components/Loading";
import FormatStep from "./FormatStep";
import CustomizeStep from "./CustomizeStep";
import ReviewStep from "./ReviewStep";
import ContentStep from "./ContentStep";

const steps = ["Content", "Format", "Customize", "Review"];

const MediaTemplatePage = ({ user }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [npoList, setNpoList] = useState();
  const [projectList, setProjectList] = useState();
  const { getUserByGoogleId } = useContext(UserApiContext);

  console.log(user);
  const { loading, error, data } = useLoader(
    async () => await getUserByGoogleId(user.id),
    []
  );

  if (loading) return isLoading();

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
          {activeStep === 3 && <ReviewStep />}
        </div>
        <div style={{ margin: "25px" }}>
          {activeStep === 0 ? null : (
            <>
              <Button
                sx={{
                  height: "45px",
                  width: "140px",
                  marginRight: "25px",
                  borderRadius: "8px",
                  backgroundColor: "#FFF",
                  border: "solid 2px black",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#FFF",
                    border: "solid 2px #7209B7",
                    color: "#7209B7",
                  },
                }}
                onClick={handleBack}
                disabled={activeStep === 0}
                variant="outlined"
              >
                Back
              </Button>
              {activeStep === 3 ? (
                <>
                  <Button
                    disabled={true}
                    sx={{
                      height: "45px",
                      width: "140px",
                      marginRight: "25px",
                      borderRadius: "8px",
                      backgroundColor: "#FFF",
                      border: "solid 2px black",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#FFF",
                        border: "solid 2px #7209B7",
                        color: "#7209B7",
                      },
                    }}
                  >
                    Download
                  </Button>
                  <Button
                    disabled={true}
                    sx={{
                      height: "45px",
                      width: "140px",
                      marginRight: "25px",
                      borderRadius: "8px",
                      backgroundColor: "#FFF",
                      border: "solid 2px black",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#FFF",
                        border: "solid 2px #7209B7",
                        color: "#7209B7",
                      },
                    }}
                  >
                    Share
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    height: "45px",
                    width: "140px",
                    borderRadius: "8px",
                    backgroundColor: "#7209B7",
                    "&:hover": {
                      backgroundColor: "#A400FF",
                    },
                  }}
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaTemplatePage;
