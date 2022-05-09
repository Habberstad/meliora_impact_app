import ProfileIcon from "../../media/profile-icon.png";
import MelioraIcon from "../../media/meliora_logo.png";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-company-logo">
        <img src={MelioraIcon} alt="company-icon" />
      </div>
      <div className="profile-name-badge">
        <img src={ProfileIcon} alt="profile-icon" />
        <div>Test Persson</div> {/* TODO: Replace with username */}
      </div>
    </div>
  );
};

export default Sidebar;
