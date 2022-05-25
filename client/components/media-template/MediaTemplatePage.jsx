import "../../styles/template-styles/template-styles.css";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";
import { GlobalHeader } from "../headers/GlobalHeader";
import { useLoader } from "../../helpers/UseLoader";
import { useContext } from "react";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { UserApiContext } from "../../api-client/userApiContext";
import { isLoading } from "../shared-components/Loading";

const steps = ["Content", "Format", "Customize", "Review"];

/*const npoList = [
  {
    title: "Redd barna",
  },
  {
    title: "Leve Havet",
  },
  {
    title: "The Williams Foundation",
  },
  {
    title: "Clean Water Initiative",
  },
];*/

const ContentStep = ({ npoList }) => {
  const [selectedCard, setSelectedCard] = useState("");
  const [isCardSelected, setIsCardSelected] = useState(true);

  return (
    <div>
      <div className="npo-card-container">
        {npoList.map((x) => (
          <div className="npo-card">
            <div key={x.name}>{x.name}</div>
          </div>
        ))}
      </div>
      {isCardSelected && (
        <div className="template-project-container">
          <div
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginTop: "50px",
              marginBottom: "30px",
            }}
          >
            Select Project
          </div>
          <div>
            <div className="template-project-card">
              <div style={{ width: "252px" }}>
                <img
                  src="https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500"
                  alt=""
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    margin: "10px 0px 15px 60px",
                    padding: "0 15px 5px 15px",
                    borderBottom: "solid 1px #7209B7",
                  }}
                >
                  Leve Havet
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#454545",
                    margin: "5px 0px 5px 35px",
                  }}
                >
                  Description text
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FormatStep = () => <div>Format step</div>;

const CustomizeStep = () => <div>Customize step</div>;

const ReviewStep = () => <div>Review step</div>;

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

  console.log("npo response", data);

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
        <div className="template-step-content">
          {activeStep === 0 && <ContentStep npoList={data.npo_partners} />}
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
