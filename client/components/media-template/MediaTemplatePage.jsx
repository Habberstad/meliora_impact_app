import "../../styles/template-styles/template-styles.css";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useContext, useState } from "react";
import { GlobalHeader } from "../headers/GlobalHeader";
import { useLoader } from "../../helpers/UseLoader";
import { UserApiContext } from "../../api-client/userApiContext";
import { isLoading } from "../shared-components/Loading";
import { FormatStep } from "./FormatStep";
import { CustomizeStep } from "./CustomizeStep";
import { ReviewStep } from "./ReviewStep";
import {
  templateCardButtonStyle,
  templateSelectedCardButtonStyle,
} from "../../styles/button-style-config";
import { Check } from "@mui/icons-material";

const steps = ["Content", "Format", "Customize", "Review"];

function TemplateProjectCard({ data }) {
  return (
    <div className="template-project-card">
      <div style={{ width: "252px" }}>
        <img src={data.header_image} alt="header image" />
      </div>
      <div>
        <div className="template-content-card-title">{data.name}</div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#454545",
            margin: "5px 0px 5px 35px",
          }}
        >
          {data.description}
        </div>
      </div>
    </div>
  );
}

const ContentStep = ({ npoList }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleFilterProjects = (id) => {
    const res = npoList.filter((x) => x._id === id);
    const selectedNpo = { ...res[0] };
    setFilteredProjects(selectedNpo.projects);
    setSelectedCard(id);
    setIsCardSelected(true);
  };

  return (
    <div>
      <div className="npo-card-container">
        {npoList.map((x) => (
          <div
            style={
              selectedCard === x._id
                ? templateSelectedCardButtonStyle
                : templateCardButtonStyle
            }
            onClick={() => handleFilterProjects(x._id)}
          >
            <div key={x._id}>{x.name}</div>
          </div>
        ))}
      </div>
      {isCardSelected && (
        <div className="template-project-container">
          <div className="template-content-sub-title">Select Project</div>
          <div>
            {filteredProjects.map((x) => (
              <TemplateProjectCard key={x._id} data={x} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
        <div className="template-content-title">Select Organization</div>
        <div className="template-step-content">
          {activeStep === 0 && <ContentStep npoList={data.npo_partners} />}
          {activeStep === 1 && <FormatStep />}
          {activeStep === 2 && <CustomizeStep />}
          {activeStep === 3 && <ReviewStep />}
        </div>
        <div style={{ margin: "25px" }}>
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
              <Button>Download</Button>
              <Button>Share</Button>
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
        </div>
      </div>
    </div>
  );
};

export default MediaTemplatePage;
