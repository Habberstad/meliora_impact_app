import WavesIcon from "@mui/icons-material/Waves";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import HarryMapChart from "../../../HarryMapChart";
import { DevelopmentGoalsWater } from "../../dashboard/DevelopmentGoalsWater";
import { DevelopmentGoalsKnowledge } from "../../dashboard/DevelopmentGoalsKnowledge";

const OverviewTabContent = ({ data, category }) => {
  return (
    <div>
      <div className="information-section">
        <div className="mission-info-section">
          <div className="mission-paragraph">
            <div className="paragraph-title">Our Mission</div>
            <div className="paragraph-text">{data.paragraph_1.text}</div>
          </div>
          <div className="mission-map-img">
            <HarryMapChart />
          </div>
        </div>
      </div>
      <div className="overview-development-container">
        <div className="overview-development-header">
          Our UN Sustainable Development Goals
        </div>
        {category === "water" ? (
          <DevelopmentGoalsWater />
        ) : (
          <DevelopmentGoalsKnowledge />
        )}
      </div>

      <div className="vision-section">
        <div className="vision-title">Our Vision</div>
        <div className="vision-box-section">
          <div className="vision-box">
            <WavesIcon sx={{ color: "#A400FF", fontSize: "60px" }} />
            <div className="vision-box-text">
              {data.vision_section.vision_1}
            </div>
          </div>
          <div className="vision-box">
            <FavoriteBorderIcon sx={{ color: "#A400FF", fontSize: "60px" }} />
            <div className="vision-box-text">
              {data.vision_section.vision_2}
            </div>
          </div>
        </div>
        <div className="vision-box-section">
          <div className="vision-box">
            <WorkspacePremiumIcon sx={{ color: "#A400FF", fontSize: "60px" }} />
            <div className="vision-box-text">
              {data.vision_section.vision_3}
            </div>
          </div>
          <div className="vision-box">
            <SouthAmericaIcon
              sx={{
                color: "#A400FF",

                fontSize: "60px",
              }}
            />
            <div className="vision-box-text">
              {data.vision_section.vision_4}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTabContent;
