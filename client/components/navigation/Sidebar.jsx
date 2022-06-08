import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import MelioraIcon from "../../media/meliora_logo.png";
import "../../styles/sidebar-styles.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import { UserContext } from "../../App";

const Sidebar = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const { pathname: location } = useLocation();

  /*TODO: Investigate for sidebar highlight logic*/
  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );

  return (
    <div className="sidebar-container">
      <div className="sidebar-company-logo">
        <Link to={"/"}>
          <img src={MelioraIcon} alt="company-icon" />
        </Link>
      </div>

      <div
        className="profile-name-badge"
        onClick={() => navigate("/account-information")}
      >
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
          {user.subscription_type !== "premium" ? (
            <Link
              to={"/"}
              style={{ textDecoration: "none", cursor: "disabled" }}
            >
              <div className={"nav-item-disabled"}>
                <SlowMotionVideoIcon sx={{ marginRight: "20px" }} />
                <div>
                  Meliora Wrapped
                  <span className="partner-only-badge"> Partner only</span>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/wrapped"} style={{ textDecoration: "none" }}>
              <div
                className={`${
                  location === "/wrapped" ? "nav-item-selected" : "nav-item"
                }`}
              >
                <SlowMotionVideoIcon sx={{ marginRight: "20px" }} />
                <div>Meliora Wrapped</div>
              </div>
            </Link>
          )}

          {user.subscription_type !== "premium" ? (
            <Link
              to={"/"}
              style={{ textDecoration: "none", cursor: "disabled" }}
            >
              <div className={"nav-item-disabled"}>
                <CreateIcon sx={{ marginRight: "20px" }} />
                <div>
                  Media Templates
                  <span className="partner-only-badge"> Partner only</span>
                </div>
              </div>
            </Link>
          ) : (
            <Link to={"/templates"} style={{ textDecoration: "none" }}>
              <div
                className={`${
                  location === "/templates" ? "nav-item-selected" : "nav-item"
                }`}
              >
                <CreateIcon sx={{ marginRight: "20px" }} />
                <div>Media Templates</div>
              </div>
            </Link>
          )}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Link to={"/accounting"} style={{ textDecoration: "none" }}>
            <div
              className={`${
                location === "/accounting" ? "nav-item-selected" : "nav-item"
              }`}
            >
              <BarChartIcon sx={{ marginRight: "20px" }} />
              <div>Financials</div>
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
              <AccountCircleIcon sx={{ marginRight: "20px" }} />
              <div>My account</div>
            </div>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={"nav-item-disabled"}>
              <PeopleIcon sx={{ marginRight: "20px" }} />
              <div>Users</div>
            </div>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={"nav-item-disabled"}>
              <SettingsIcon sx={{ marginRight: "20px" }} />
              <div>Settings</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
