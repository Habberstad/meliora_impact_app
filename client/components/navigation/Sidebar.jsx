import { useState } from "react";
import ProfileIcon from "../../media/profile-icon.png";
import MelioraIcon from "../../media/meliora_logo.png";
import DashboardIcon from "../../media/dashboard_icon.png";
import MyNonProfitsIcon from "../../media/my_npo_icon.png";
import ArticlesIcon from "../../media/articles_icon.png";
import DiscoverIcon from "../../media/discover_icon.png";
import WrappedIcon from "../../media/wrapped_icon.png";
import TemplatesIcon from "../../media/templates_icon.png";

const Sidebar = () => {
  const [isSelected, setIsSelected] = useState(true);

  const handleSelectedItem = () => {};

  return (
    <div>
      <div className="sidebar-company-logo">
        <img src={MelioraIcon} alt="company-icon" />
      </div>
      <div className="profile-name-badge">
        <img src={ProfileIcon} alt="profile-icon" />
        <div>Test Persson</div> {/* TODO: Replace with username */}
      </div>
      <div className="nav-item-container">
        <div className="nav-item">
          <img className="icon-style" src={DashboardIcon} alt="dashboard" />
          <div>Dashboard</div>
        </div>
        <div className="nav-item">
          <img className="icon-style" src={MyNonProfitsIcon} alt="dashboard" />
          <div>My Non-Profits</div>
        </div>
        <div className="nav-item">
          <img className="icon-style" src={ArticlesIcon} alt="dashboard" />
          <div>Articles</div>
        </div>
        <div className="nav-item">
          <img className="icon-style" src={DiscoverIcon} alt="dashboard" />
          <div>Discover Non-Profits</div>
        </div>
        <div className="nav-item">
          <img className="icon-style" src={WrappedIcon} alt="dashboard" />
          <div>Meliora Wrapped</div>
        </div>
        <div className="nav-item">
          <img className="icon-style" src={TemplatesIcon} alt="dashboard" />
          <div>Social Media Templates</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
