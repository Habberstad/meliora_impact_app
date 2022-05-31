import "../../../styles/npo-profile-page-styles/project-tab-styles.css";
import { Button } from "@mui/material";
import {
  highlightedOutlinedTabButtonStyle,
  outlinedTabButtonStyle,
} from "../../../styles/button-style-config";
import { useState } from "react";
import { ProjectContent } from "./ProjectContent";

const ProjectTabPage = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("project1");
  console.log(data);

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <div className="outer-project-content-container">
      <div className="projects-tab-navigation-section">
        <Button
          onClick={() => handleNavigationState("project1")}
          sx={
            selectedTab === "project1"
              ? highlightedOutlinedTabButtonStyle
              : outlinedTabButtonStyle
          }
        >
          {data[0].name}
        </Button>
        <Button
          onClick={() => handleNavigationState("project2")}
          sx={
            selectedTab === "project2"
              ? highlightedOutlinedTabButtonStyle
              : outlinedTabButtonStyle
          }
        >
          {data[1].name}
        </Button>
        <Button
          onClick={() => handleNavigationState("project3")}
          sx={
            selectedTab === "project3"
              ? highlightedOutlinedTabButtonStyle
              : outlinedTabButtonStyle
          }
        >
          {data[2].name}
        </Button>
        <Button
          onClick={() => handleNavigationState("project4")}
          sx={
            selectedTab === "project4"
              ? highlightedOutlinedTabButtonStyle
              : outlinedTabButtonStyle
          }
        >
          {data[3].name}
        </Button>
      </div>
      <div className="project-content-container">
        {selectedTab === "project1" && (
          <ProjectContent data={data[0].content} />
        )}
        {selectedTab === "project2" && (
          <ProjectContent data={data[1].content} />
        )}
        {selectedTab === "project3" && (
          <ProjectContent data={data[2].content} />
        )}
        {selectedTab === "project4" && (
          <ProjectContent data={data[3].content} />
        )}
      </div>
    </div>
  );
};

export default ProjectTabPage;
