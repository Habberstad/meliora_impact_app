import "../../styles/npo-profle-page-styles/npo-profile-styles.css";
import { ProfileHeader } from "./ProfileHeader";
import { useState } from "react";
import { Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FlareIcon from "@mui/icons-material/Flare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { highlightedNavButtonStyle, navButtonStyle } from "./style-config";
import OverviewTabContent from "./OverviewTabContent";
import Timeline from "./npo-media/timeline_component4x.png";

const NonProfitProfilePage = () => {
  const [nonProfitData, setNonProfitData] = useState({});
  const [selectedTab, setSelectedTab] = useState("overview");

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <div className="main-profile-container">
      <ProfileHeader nonProfitData={nonProfitData} />
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
            <OverviewTabContent />
          </div>
        </>
      )}
    </div>
  );
};

export default NonProfitProfilePage;
