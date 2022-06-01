import "../../styles/topNavbar-styles.css";
import LanguageIconNorway from "../../media/norwayFlagIcon.png";
import DarkModeIconMoon from "../../media/moonDarkmodeIcon.png";
import NotificationIconBell from "../../media/bellIcon.png";
import ProfilePicturePlaceholder from "../../media/profilePicturePlaceholder.png";
import { IconButton } from "@mui/material";

export const TopNavBar = () => {
  return (
    <div className={"top-navbar-container"}>
      <div className={"top-navbar-icon-container"}>
        <IconButton aria-label="Select language">
          <img
            src={LanguageIconNorway}
            alt="LanguageIconNorway"
            className={"top-navbar-icon-button"}
          />
        </IconButton>
        <IconButton aria-label="Darkmode">
          <img
            src={DarkModeIconMoon}
            alt="Darkmode icon"
            className={"top-navbar-icon-button"}
          />
        </IconButton>
        <IconButton aria-label="notifications">
          <img
            src={NotificationIconBell}
            alt="Notification icon"
            className={"top-navbar-icon-button"}
          />
        </IconButton>
        <IconButton aria-label="profile">
          <img
            src={ProfilePicturePlaceholder}
            alt="Notification icon"
            className={"top-navbar-icon-button"}
            style={{ width: "30px" }}
          />
        </IconButton>
      </div>
    </div>
  );
};
