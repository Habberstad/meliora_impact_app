import MelioraIcon from "../../media/meliora_logo.png";
import HandImage from "../../media/sidebar_hand_icon.png";
import { Link } from "react-router-dom";
import "../../styles/sidebar-styles.css";
import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { UserContext } from "../../App";
import SpeedIcon from "@mui/icons-material/Speed";

const Sidebar = (props) => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const user = React.useContext(UserContext);
  const [url, setUrl] = useState();

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
      <div className="sidebar-company-logo">
        <Link to={"/"}>
          <img src={MelioraIcon} alt="company-icon" />
        </Link>
      </div>

      <div className="profile-name-badge">
        <div style={{ marginTop: "10px" }}> {user.org_name} </div>
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
      <div className="nav-item-container">
        <div>
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
              <DashboardIcon sx={{ marginRight: "20px" }} />
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
              <VolunteerActivismIcon sx={{ marginRight: "20px" }} />

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
              <ArticleIcon sx={{ marginRight: "20px" }} />
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
              <SearchIcon sx={{ marginRight: "20px" }} />
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
              <SlowMotionVideoIcon sx={{ marginRight: "20px" }} />
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
              <CreateIcon sx={{ marginRight: "20px" }} />
              <div>Social Media Templates</div>
            </div>
          </Link>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Link
            onClick={() => handleNavigationState("accounting")}
            to={"/accounting"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "accounting" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <BarChartIcon sx={{ marginRight: "20px" }} />
              <div>Accounting</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("settings")}
            to={"/templates"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SettingsIcon sx={{ marginRight: "20px" }} />
              <div>Settings</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("settings")}
            to={"/templates"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <GroupIcon sx={{ marginRight: "20px" }} />
              <div>Users</div>
            </div>
          </Link>
          <Link
            onClick={() => handleNavigationState("settings")}
            to={"/templates"}
            style={{ textDecoration: "none" }}
          >
            <div
              className={`${
                selectedTab === "" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <ReceiptIcon sx={{ marginRight: "20px" }} />
              <div>Billing</div>
            </div>
          </Link>
        </div>
      </div>

      {/*      <div className="sidebar-image-container">
        <img src={HandImage} className="sidebar-image" alt="sidebar-image" />
      </div>*/}
    </div>
  );
};

export default Sidebar;
