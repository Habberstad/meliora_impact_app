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

const steps = ["Content", "Format", "Customize", "Review"];

function TemplateProjectCard({ data }) {
  return (
    <div className="template-project-card">
      <div style={{ width: "252px" }}>
        <img
          src="https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500"
          alt=""
        />
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
  const [selectedCard, setSelectedCard] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isCardSelected, setIsCardSelected] = useState(true);

  const handleFilterProjects = (id) => {
    const res = npoList.filter((x) => x._id === id);
    const selectedNpo = { ...res[0] };
    setFilteredProjects(selectedNpo.projects);
    setSelectedCard(id);
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
