import "../../styles/template-styles/template-styles.css";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import { GlobalHeader } from "../headers/GlobalHeader";

const steps = ["Content", "Format", "Customize", "Review"];

const ContentStep = () => <div>Content step</div>;

const FormatStep = () => <div>Format step</div>;

const CustomizeStep = () => <div>Customize step</div>;

const ReviewStep = () => <div>Review step</div>;

const MediaTemplatePage = ({ user }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [npoList, setNpoList] = useState();
  const [projectList, setProjectList] = useState();

  console.log(user);

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {};

  return (
    <div className="template-main-container">
      <div className="template-header-container">
        <GlobalHeader
          title="Start sharing your impact"
          desc="Generate social media content to share your impact to the world, tailored for your company’s platforms."
        />
      </div>
      <div className="template-content-container">
        <div className="template-timeline-container">
          <Box sx={{ width: "500px" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <div className="template-content-title">Select Organization</div>
        <div>
          {activeStep === 0 && <ContentStep />}
          {activeStep === 1 && <FormatStep />}
          {activeStep === 2 && <CustomizeStep />}
          {activeStep === 3 && <ReviewStep />}
        </div>
        <div>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
          {activeStep === 3 ? (
            <>
              <Button>Download</Button>
              <Button>Share</Button>
            </>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaTemplatePage;
