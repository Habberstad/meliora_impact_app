import "../../../styles/npo-profile-page-styles/project-tab-styles.css";
import { Button } from "@mui/material";
import {
  highlightedOutlinedTabButtonStyle,
  outlinedTabButtonStyle,
} from "../../../styles/button-style-config";
import { useState } from "react";
import { ProjectContent } from "./ProjectContent";

const ProjectTabPage = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("project4");

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  let tabNumber = 0;

  return (
    <div className="outer-project-content-container">
      <div className="projects-tab-navigation-section">
        {data.map((x) => (
          <Button
            onClick={() => handleNavigationState(`project${(tabNumber += 1)}`)}
            sx={
              selectedTab === `project${(tabNumber += 1)}`
                ? highlightedOutlinedTabButtonStyle
                : outlinedTabButtonStyle
            }
          >
            {x.name}
          </Button>
        ))}
      </div>
      <div className="project-content-container">
        {selectedTab === "project1" && (
          <ProjectContent data={data.project_1.content} />
        )}
      </div>
    </div>
  );
};

export default ProjectTabPage;
