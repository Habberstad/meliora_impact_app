import "../../styles/topNavbar-styles.css";
import LanguageIconNorway from "../../media/norwayFlagIcon.png";
import DarkModeIconMoon from "../../media/moonDarkmodeIcon.png";
import NotificationIconBell from "../../media/bellIcon.png";
import ProfilePicturePlaceholder from "../../media/profilePicturePlaceholder.png";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import * as PropTypes from "prop-types";
import { NavbarDropDown } from "./NavbarDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

NavbarDropDown.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};

export const TopNavBar = () => {
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
          <IconButton aria-label="Select language">
            <img
              src={LanguageIconNorway}
              alt="LanguageIconNorway"
              className={"top-navbar-icon-button"}
            />
          </IconButton>
        </div>
        <div className={"top-navbar-icon-button-container"}>
          <IconButton aria-label="Darkmode">
            <img
              src={DarkModeIconMoon}
              alt="Darkmode icon"
              className={"top-navbar-icon-button"}
            />
          </IconButton>
        </div>
        <p>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-half-stroke"
            style={{ color: "black" }}
          />
        </p>

        <div className={"top-navbar-icon-button-container"}>
          <IconButton aria-label="notifications">
            <img
              src={NotificationIconBell}
              alt="Notification icon"
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
