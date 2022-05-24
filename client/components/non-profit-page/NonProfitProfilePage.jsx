import "../../styles/npo-profile-page-styles/npo-profile-styles.css";
import "../../styles/npo-profile-page-styles/overview-styles.css";
import { ProfileHeader } from "./ProfileHeader";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FlareIcon from "@mui/icons-material/Flare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  highlightedNavButtonStyle,
  navButtonStyle,
} from "../../styles/button-style-config";
import OverviewTabContent from "./overview-tab/OverviewTabContent";
import Timeline from "./npo-media/timeline_component4x.png";
import ProjectsHeader from "./ProjectsHeader";
import ProjectTabPage from "./projects-tab/ProjectTabPage";
import ImpactTabContent from "./impact-tab/ImpactTabContent";
import KeyInformationTab from "./key-information-tab/KeyInformationTab";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { useLoading } from "../../useLoading";
import { NpoApiContext } from "../../api-client/npoApiContext";

const NonProfitProfilePage = () => {
  const [nonProfitData, setNonProfitData] = useState({});
  const [selectedTab, setSelectedTab] = useState("overview");

  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const { getNpoById } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(
    async () => await getNpoById(urlPathParam),
    []
  );

  if (loading) return <h1>loading..</h1>;

  console.log("data", data);

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <div className="main-profile-container">
      <ProfileHeader
        name={data.name}
        data={data.header_data}
        nonProfitData={nonProfitData}
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
    </div>
  );
};

export default NonProfitProfilePage;
