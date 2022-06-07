import { Button } from "@mui/material";
import {
  highlightedFilterButtonB43,
  filterButtonB43,
} from "../../styles/button-style-config";
import AppsIcon from "@mui/icons-material/Apps";
import FlareIcon from "@mui/icons-material/Flare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import * as React from "react";

export function NavigationBar({
  onClick,
  selectedTab,
  onClick1,
  onClick2,
  onClick3,
}) {
  return (
    <div className="tab-navigation-section">
      <Button
        onClick={onClick}
        variant="contained"
        sx={
          selectedTab === "overview"
            ? { ...filterButtonB43, ...highlightedFilterButtonB43 }
            : filterButtonB43
        }
      >
        <AppsIcon sx={{ marginRight: "10px" }} />
        <span className="firstLetterCap">O</span>verview
      </Button>
      <Button
        onClick={onClick1}
        variant="contained"
        sx={
          selectedTab === "projects"
            ? { ...filterButtonB43, ...highlightedFilterButtonB43 }
            : filterButtonB43
        }
      >
        <FlareIcon sx={{ marginRight: "10px" }} />
        <span className="firstLetterCap">P</span>rojects
      </Button>
      <Button
        onClick={onClick2}
        variant="contained"
        sx={
          selectedTab === "impact"
            ? { ...filterButtonB43, ...highlightedFilterButtonB43 }
            : filterButtonB43
        }
      >
        <VolunteerActivismIcon sx={{ marginRight: "10px" }} />
        <span className="firstLetterCap">I</span>mpact
      </Button>
      <Button
        onClick={onClick3}
        variant="contained"
        sx={
          selectedTab === "keyinformation"
            ? { ...filterButtonB43, ...highlightedFilterButtonB43 }
            : filterButtonB43
        }
      >
        <RemoveRedEyeIcon sx={{ marginRight: "10px" }} />
        <span className="firstLetterCap">K</span>ey
        <span className="firstLetterCap"> I</span>nformation
      </Button>
    </div>
  );
}
