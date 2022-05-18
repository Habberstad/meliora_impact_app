import ProfileIcon from "../../media/profile-icon.png";
import MelioraIcon from "../../media/meliora_logo.png";
import DashboardIcon from "../../media/dashboard_icon.png";
import MyNonProfitsIcon from "../../media/my_npo_icon.png";
import ArticlesIcon from "../../media/articles_icon.png";
import DiscoverIcon from "../../media/discover_icon.png";
import WrappedIcon from "../../media/wrapped_icon.png";
import TemplatesIcon from "../../media/templates_icon.png";
import HandImage from "../../media/sidebar_hand_icon.png";
import { Link } from "react-router-dom";
import fetchJSON from "../../helpers/fetchJSON";
import { useLoader } from "../../helpers/UseLoader";
import "../../styles/sidebar-styles.css";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Sidebar = () => {

  return (
    <div className="sidebar-container">

      <div>
        <div className="sidebar-company-logo">
          <img src={MelioraIcon} alt="company-icon" />
        </div>
        <div className="profile-name-badge">
          <img src={ProfileIcon} alt="profile-icon" />
          <div> Test Persson </div> {/* TODO: Replace with username */}
        </div>
        <div className="nav-item-container">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <img className="icon-style" src={DashboardIcon} alt="dashboard" />
              <div>Dashboard</div>
            </div>
          </Link>

          <Link to={"our_partners"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <img
                className="icon-style"
                src={MyNonProfitsIcon}
                alt="dashboard"
              />
              <div>My Non-Profits</div>
            </div>
          </Link>

          <Link to={"/articles"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <img className="icon-style" src={ArticlesIcon} alt="dashboard" />
              <div>Articles</div>
            </div>
          </Link>
          <Link to={"/discover"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <img className="icon-style" src={DiscoverIcon} alt="dashboard" />
              <div>Discover Non-Profits</div>
            </div>
          </Link>
          <Link to={"/wrapped"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <img className="icon-style" src={WrappedIcon} alt="dashboard" />
              <div>Meliora Wrapped</div>
            </div>
          </Link>
          <Link to={"/templates"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <img className="icon-style" src={TemplatesIcon} alt="dashboard" />
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
