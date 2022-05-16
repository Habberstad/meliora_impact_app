import "../../styles/npo-profile-styles.css";
import { ProfileHeader } from "./ProfileHeader";
import { useState } from "react";
import { Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FlareIcon from "@mui/icons-material/Flare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const navButtonStyle = {
  fontFamily: "Montserrat",
  boxShadow:
    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",

  width: "190px",
  height: "60px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  textTransform: "lowercase",
  fontSize: "16px",
  fontWeight: 500,
  color: "#353535",
  "&:hover": {
    backgroundColor: "#DEEAEE",
    boxShadow:
      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
  },
};

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
