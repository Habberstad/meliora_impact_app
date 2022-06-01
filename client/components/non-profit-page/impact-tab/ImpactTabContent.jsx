import ImpactTile from "./GreenImpactTile";
import "../../../styles/npo-profile-page-styles/impact-styles.css";
import contributorsImg from "../npo-media/contributors.png";
import { LeftMediaCard } from "./LeftMediaCard";
import { RightMediaCard } from "./RightMediaCard";
import { DataSectionMediaCard } from "./DataSectionMediaCard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import OpacityIcon from "@mui/icons-material/Opacity";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import GreenImpactTile from "./GreenImpactTile";
import BlueImpactTile from "./BlueImpactTile";
import PinkImpactTile from "./PinkImpactTile";
import YellowMiddleTile from "./YellowMiddleTile";
import PinkMiddleTile from "./PinkMiddleTile";
import BlueMiddleTile from "./BlueMiddleTile";
import GreenMiddleTile from "./GreenMiddleTile";

const ImpactTabContent = ({ data, category }) => {
  console.log(data);
  console.log(category);
  return (
    <div className="impact-main-container">
      <div className="impact-top-tile-section">
        <GreenImpactTile category={category} data={data.top_tile_1} />
        <BlueImpactTile category={category} data={data.top_tile_2} />
        <PinkImpactTile category={category} data={data.top_tile_3} />
        <GreenImpactTile category={category} data={data.top_tile_4} />
      </div>
      <div className="impact-media-section">
        <LeftMediaCard />
        <RightMediaCard />
      </div>
      <div className="impact-data-section">
        <div className="left-data-container">
          <YellowMiddleTile category={category} data={data.middle_tile_1} />
          <PinkMiddleTile category={category} data={data.middle_tile_2} />
          <BlueMiddleTile category={category} data={data.middle_tile_3} />
          <GreenMiddleTile category={category} data={data.middle_tile_4} />
        </div>
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
