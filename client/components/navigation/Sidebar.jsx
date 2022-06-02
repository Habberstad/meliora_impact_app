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
import { useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Sidebar = () => {
  const user = React.useContext(UserContext);

  const { pathname: location } = useLocation();
  console.log("location", location);

  function handleLogoutClick() {
    window.location.href = window.location.origin + "/auth/logout";
  }

  /*TODO: Investigate for sidebar highlight logic*/
  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };
  console.log(user);

  return (
    <div className="sidebar-container">
      <div className="sidebar-company-logo">
        <Link to={"/"}>
          <img src={MelioraIcon} alt="company-icon" />
        </Link>
      </div>

      <div className="profile-name-badge">
        <div style={{ margin: "10px 0" }}> {user.org_name} </div>
        {/* TODO: Replace with username */}
        <div
          style={{ marginBottom: "10px" }}
          className={`login-content-header-subscription-tag partner-only-badge ${
            user.subscription_type === "premium" ? "premium" : "freemium"
          }`}
        >
          <div>
            {user.subscription_type === "premium"
              ? "Meliora Partner"
              : "Freemium"}
          </div>
          <CheckCircleIcon sx={{ fontSize: "medium" }} />
        </div>
      </div>
      <div className="nav-item-container">
        <div>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <DashboardIcon sx={{ marginRight: "20px" }} />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to={"our-partners"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/our-partners" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <VolunteerActivismIcon sx={{ marginRight: "20px" }} />

              <div>My Partners</div>
            </div>
          </Link>
          <Link to={"/articles"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/articles" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <ArticleIcon sx={{ marginRight: "20px" }} />
              <div>Articles</div>
            </div>
          </Link>
          <Link to={"/discover"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/discover" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SearchIcon sx={{ marginRight: "20px" }} />
              <div>Discover Non-Profits</div>
            </div>
          </Link>
          <Link to={"/wrapped"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/wrapped" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <SlowMotionVideoIcon sx={{ marginRight: "20px" }} />
              <div>
                {user.subscription_type !== "premium" ? (
                  <>
                    Meliora Wrapped
                    <span className="partner-only-badge"> Partner only</span>
                  </>
                ) : (
                  "Meliora Wrapped"
                )}
              </div>
            </div>
          </Link>
          <Link to={"/templates"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/templates" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <CreateIcon sx={{ marginRight: "20px" }} />
              <div>
                {user.subscription_type !== "premium" ? (
                  <>
                    Media Templates
                    <span className="partner-only-badge"> Partner only</span>
                  </>
                ) : (
                  "Media Templates"
                )}
              </div>
            </div>
          </Link>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Link to={"/accounting"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/accounting" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <BarChartIcon sx={{ marginRight: "20px" }} />
              <div>Accounting</div>
            </div>
          </Link>
          <Link to={"/account-information"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/account-information"
                  ? "nav-item-selected"
                  : "nav-item"
              }`}
            >
              <BarChartIcon sx={{ marginRight: "20px" }} />
              <div>Account Information</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
