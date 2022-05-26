import MelioraIcon from "../../media/meliora_logo.png";
import HandImage from "../../media/sidebar_hand_icon.png";
import { Link } from "react-router-dom";
import "../../styles/sidebar-styles.css";
import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import { UserContext } from "../../App";
import SpeedIcon from "@mui/icons-material/Speed";

const Sidebar = (props) => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const user = React.useContext(UserContext);
  const [url, setUrl] = useState();
  console.log(user);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  function handleLogoutClick() {
    location.href = window.location.origin + "/auth/logout";
  }

  /*TODO: Investigate for sidebar highlight logic*/
  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <div className="sidebar-container">
      <div>
        <div className="sidebar-company-logo">
          <img src={MelioraIcon} alt="company-icon" />
        </div>

        <div className="profile-name-badge">
          <img src={user.photos[0].value} alt="profile-icon" />
          <div>
            <div style={{ marginTop: "10px" }}> {user.displayName} </div>{" "}
            {/* TODO: Replace with username */}
            <Button
              sx={{
                with: "70px",
                height: "22px",
                fontSize: "10px",
                fontWeight: "500",
                marginTop: "5px",
                color: "black",
                border: "none",
                backgroundColor: "#dadada",
                "&:hover": {
                  backgroundColor: "#e5e5e5",
                  color: "black",
                  border: "none",
                },
              }}
              variant="outlined"
              onClick={handleLogoutClick}
            >
              Log out
            </Button>
          </div>
        </div>
        <div className="nav-item-container">
          <Link
            onClick={() => handleNavigationState("dashboard")}
            to={"/"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "dashboard" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("partners")}
            to={"our-partners"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "partners" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SpeedIcon sx={{ marginRight: "20px" }} />

              <div>My Non-Profits</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("articles")}
            to={"/articles"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "articles" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Articles</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("discover")}
            to={"/discover"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "discover" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Discover Non-Profits</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("wrapped")}
            to={"/wrapped"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "wrapped" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Meliora Wrapped</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("templates")}
            to={"/templates"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "templates" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Social Media Templates</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="sidebar-image-container">
        <img src={HandImage} className="sidebar-image" alt="sidebar-image" />
      </div>
    </div>
  );
};

export default Sidebar;
