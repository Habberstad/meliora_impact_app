import ImpactTile from "./ImpactTile";
import "../../../styles/npo-profile-page-styles/impact-styles.css";
import contributorsImg from "../npo-media/contributors.png";
import { LeftMediaCard } from "./LeftMediaCard";
import { RightMediaCard } from "./RightMediaCard";
import { DataSectionMediaCard } from "./DataSectionMediaCard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import OpacityIcon from "@mui/icons-material/Opacity";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const ImpactTabContent = () => {
  return (
    <div className="impact-main-container">
      <div className="impact-top-tile-section">
        <ImpactTile />
        <ImpactTile />
        <ImpactTile />
        <ImpactTile />
      </div>
      <div className="impact-media-section">
        <LeftMediaCard />
        <RightMediaCard />
      </div>
      <div className="impact-data-section">
        {/*TODO: REFACTOR INTO RE-USABLE COMPONENTS*/}
        <div className="left-data-container">
          <div
            style={{ backgroundColor: "#A68BB7", color: "#FFF" }}
            className="small-data-box"
          >
            <div className="icon-container">
              <HandshakeIcon sx={{ fontSize: "35px" }} />
            </div>
            <div className="main-data-text">Donate</div>
            <div
              style={{
                fontSize: "14px",
                margin: "0 10px",
                textAlign: "center",
              }}
            >
              And make the world a better place with us
            </div>
          </div>
          <div
            style={{ backgroundColor: "#E0EFF4" }}
            className="small-data-box"
          >
            <div className="icon-container">
              <OpacityIcon sx={{ fontSize: "35px" }} />
            </div>
            <div className="main-data-text">Donate</div>
            <div
              style={{
                fontSize: "14px",
                margin: "0 10px",
                textAlign: "center",
              }}
            >
              And make the world a better place with us
            </div>
          </div>
          <div
            style={{ backgroundColor: "#FEFFE0" }}
            className="small-data-box"
          >
            <div className="icon-container">
              <BeachAccessIcon sx={{ fontSize: "35px" }} />
            </div>
            <div className="main-data-text">Donate</div>
            <div
              style={{
                fontSize: "14px",
                margin: "0 10px",
                textAlign: "center",
              }}
            >
              And make the world a better place with us
            </div>
          </div>
          <div className="small-data-box"></div>
        </div>
        {/*TODO: REFACTOR INTO RE-USABLE COMPONENTS*/}
        <DataSectionMediaCard />
      </div>
      <div className="data-map-section">
        <div className="data-map">
          <div className="data-map-title">Highlighted Data</div>
          <div className="data-map-subheading">Global reach</div>
        </div>
      </div>
      <div className="contributors-section">
        <img src={contributorsImg} />
      </div>
    </div>
  );
};

export default ImpactTabContent;
