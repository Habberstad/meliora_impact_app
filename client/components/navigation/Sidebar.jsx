import MelioraIcon from "../../media/meliora_logo.png";
import HandImage from "../../media/sidebar_hand_icon.png";
import { Link } from "react-router-dom";
import "../../styles/sidebar-styles.css";
import React, { useEffect, useState } from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import { UserContext } from "../../App";
import SpeedIcon from "@mui/icons-material/Speed";

const Sidebar = (props) => {
  const user = React.useContext(UserContext);
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(window.location.href);
    console.log(url);
  }, []);

  return (
    <div className="sidebar-container">
      <div>
        <div className="sidebar-company-logo">
          <img src={MelioraIcon} alt="company-icon" />
        </div>
        <div className="profile-name-badge">
          <img src={user.photos[0].value} alt="profile-icon" />
          <div> {user.displayName} </div> {/* TODO: Replace with username */}
        </div>
        <div className="nav-item-container">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to={"our-partners"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <SpeedIcon sx={{ marginRight: "20px" }} />

              <div>My Non-Profits</div>
            </div>
          </Link>
          <Link to={"/articles"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Articles</div>
            </div>
          </Link>
          <Link to={"/discover"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Discover Non-Profits</div>
            </div>
          </Link>
          <Link to={"/wrapped"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Meliora Wrapped</div>
            </div>
          </Link>
          <Link to={"/templates"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <SpeedIcon sx={{ marginRight: "20px" }} />
              <div>Social Media Templates</div>
            </div>
          </Link>
          <Link to={"/npo-profile/id"} style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <ConstructionIcon sx={{ marginRight: "20px" }} />
              <div>Development: npo profile</div>
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
