import "../../styles/topNavbar-styles.css";
import LanguageIconNorway from "../../media/norwayFlagIcon.png";
import DarkModeIconMoon from "../../media/moonDarkmodeIcon.png";
import NotificationIconBell from "../../media/bellIcon.png";
import ProfilePicturePlaceholder from "../../media/profilePicturePlaceholder.png";
import LanguageIconGb from "../../media/1f1ec-1f1e7.svg";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import * as PropTypes from "prop-types";
import { NavbarDropDown } from "./NavbarDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCircleHalfStroke,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

NavbarDropDown.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};

export const TopNavBar = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={"top-navbar-container"}>
      <div className={"top-navbar-icon-container"}>
        <div className={"top-navbar-icon-button-container"}>
          <IconButton
            aria-label="Select language"
            sx={{ color: "#637381" }}
            onClick={() => setIsEnglish(!isEnglish)}
          >
            <img
              src={isEnglish ? LanguageIconGb : LanguageIconNorway}
              alt="LanguageIconNorway"
              className={"top-navbar-icon-button"}
            />
          </IconButton>
        </div>
        <div className={"top-navbar-icon-button-container"}>
          <IconButton aria-label="Darkmode" sx={{ color: "#637381" }}>
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              className={"top-navbar-icon-button"}
            />
          </IconButton>
        </div>

        <div className={"top-navbar-icon-button-container"}>
          <IconButton aria-label="notifications" sx={{ color: "#637381" }}>
            <FontAwesomeIcon
              icon={faBell}
              className={"top-navbar-icon-button"}
            />
          </IconButton>
        </div>

        <div className={"top-navbar-icon-button-container"}>
          <IconButton
            aria-label="profile"
            aria-controls={open ? "account-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleProfileClick}
          >
            <Avatar
              alt="profile name"
              src={ProfilePicturePlaceholder}
              sx={{ width: "35px", height: "35px" }}
            />
          </IconButton>
          <NavbarDropDown
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
};
