import ImpactTile from "./ImpactTile";
import "../../styles/npo-profile-page-styles/impact-styles.css";
import contributorsImg from "./npo-media/contributors.png";

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
        <div className="left-media-card"></div>
        <div className="right-media-card"></div>
      </div>
      <div className="impact-data-section">
        <div className="left-data-container">
          <div
            style={{ backgroundColor: "#E3FCE4" }}
            className="small-data-box"
          ></div>
          <div
            style={{ backgroundColor: "#E0EFF4" }}
            className="small-data-box"
          ></div>
          <div
            style={{ backgroundColor: "#FEFFE0" }}
            className="small-data-box"
          ></div>
          <div className="small-data-box"></div>
        </div>
        <div className="right-data-container"></div>
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
