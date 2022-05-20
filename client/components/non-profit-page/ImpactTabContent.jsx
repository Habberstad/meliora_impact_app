import ImpactTile from "./ImpactTile";
import "../../styles/npo-profile-page-styles/impact-styles.css";

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
          <div className="small-data-box"></div>
          <div className="small-data-box"></div>
          <div className="small-data-box"></div>
          <div className="small-data-box"></div>
        </div>
        <div className="right-data-container"></div>
      </div>
    </div>
  );
};

export default ImpactTabContent;
