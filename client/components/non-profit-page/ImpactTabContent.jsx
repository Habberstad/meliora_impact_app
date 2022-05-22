import ImpactTile from "./ImpactTile";
import "../../styles/npo-profile-page-styles/impact-styles.css";
import contributorsImg from "./npo-media/contributors.png";
import { LeftMediaCard } from "./LeftMediaCard";
import { RightMediaCard } from "./RightMediaCard";
import { DataSectionMediaCard } from "./DataSectionMediaCard";

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
