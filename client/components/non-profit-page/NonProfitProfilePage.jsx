import "../../styles/npo-profile-styles.css";
import { ProfileHeader } from "./ProfileHeader";
import { useState } from "react";
import { Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FlareIcon from "@mui/icons-material/Flare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { navButtonStyle } from "./style-config";

const NonProfitProfilePage = () => {
  const [nonProfitData, setNonProfitData] = useState({});

  return (
    <div className="main-profile-container">
      <ProfileHeader nonProfitData={nonProfitData} />
      <div className="tab-navigation-section">
        <Button variant="contained" sx={navButtonStyle}>
          <AppsIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">O</span>verview
        </Button>
        <Button variant="contained" sx={navButtonStyle}>
          <FlareIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">P</span>rojects
        </Button>
        <Button variant="contained" sx={navButtonStyle}>
          <VolunteerActivismIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">I</span>mpact
        </Button>
        <Button variant="contained" sx={navButtonStyle}>
          <RemoveRedEyeIcon sx={{ marginRight: "10px" }} />
          <span className="firstLetterCap">K</span>ey
          <span className="firstLetterCap"> I</span>nformation
        </Button>
      </div>
    </div>
  );
};

export default NonProfitProfilePage;
