import "../../styles/topNavbar-styles.css";
import LanguageIconNorway from "../../media/norwayFlagIcon.png";
import ProfilePicturePlaceholder from "../../media/profilePicturePlaceholder.png";
import LanguageIconGb from "../../media/1f1ec-1f1e7.svg";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NavbarDropDown } from "./NavbarDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faBell } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";

export const TopNavBar = () => {
  const user = useContext(UserContext);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const [isEnglish, setIsEnglish] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 2) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    changeNavbarBackground();
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <div
      className={`top-navbar-container ${
        navbarBackground && "navbar-background-color"
      }`}
    >
      <div className={"top-navbar-icon-container"}>
        <div className={"top-navbar-icon-button-container"}>
          <Tooltip title="Language">
            <IconButton
              aria-label="Select language"
              sx={{ color: "#464d51" }}
              onClick={() => setIsEnglish(!isEnglish)}
            >
              <img
                src={isEnglish ? LanguageIconGb : LanguageIconNorway}
                alt="LanguageIconNorway"
                className={"top-navbar-icon-button"}
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className={"top-navbar-icon-button-container"}>
          <Tooltip title="Dark theme">
            <IconButton aria-label="Darkmode" sx={{ color: "#464d51" }}>
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                className={"top-navbar-icon-button"}
              />
            </IconButton>
          </Tooltip>
        </div>

        <div className={"top-navbar-icon-button-container"}>
          <Tooltip title={"Notifications"}>
            <IconButton aria-label="notifications" sx={{ color: "#464d51" }}>
              <FontAwesomeIcon
                icon={faBell}
                className={"top-navbar-icon-button"}
              />
            </IconButton>
          </Tooltip>
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
              src={user.img_url || ProfilePicturePlaceholder}
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
          <NavbarDropDown
            user={user}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
};
