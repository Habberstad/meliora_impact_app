import "../../styles/npo-profle-page-styles/overview-styles.css";
import Timeline from "./npo-media/timeline_component4x.png";
import MissionMap from "./npo-media/mission_map_img.png";
import WavesIcon from "@mui/icons-material/Waves";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";

const OverviewTabContent = () => {
  return (
    <div>
      <div className="information-section">
        <div className="mission-info-section">
          <div className="mission-paragraph">
            <div className="paragraph-title">The Williams Mission</div>
            <div className="paragraph-text">
              Our ocean unifies our world like nothing else. We are on the front
              lines of ocean protection, investing in research, leadership and
              advocacy that advances science-based solutions that work. Give
              today and make a difference for the future of our ocean!
            </div>
          </div>
          <div className="mission-map-img">
            <img src={MissionMap} alt="test" />
          </div>
        </div>
      </div>
      <div className="vision-section">
        <div className="vision-title">Our Vision</div>
        <div className="vision-box-section">
          <div className="vision-box">
            <WavesIcon sx={{ color: "#A400FF", fontSize: "60px" }} />
            <div className="vision-box-text">
              The ocean takes up 70% of our earth, it is our duty to take care
              of it.
            </div>
          </div>
          <div className="vision-box">
            <FavoriteBorderIcon sx={{ color: "#A400FF", fontSize: "60px" }} />
            <div className="vision-box-text">
              The ocean takes up 70% of our earth, it is our duty to take care
              of it.
            </div>
          </div>
        </div>
        <div className="vision-box-section">
          <div className="vision-box">
            <WorkspacePremiumIcon sx={{ color: "#A400FF", fontSize: "60px" }} />
            <div className="vision-box-text">
              The ocean takes up 70% of our earth, it is our duty to take care
              of it.
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
              The ocean takes up 70% of our earth, it is our duty to take care
              of it.
            </div>
          </div>
        </div>
      </div>
      <div className="article-section">
        <div className="sub-heading">Latest Updates</div>
        <div className="article-card-container">
          <div className="big-article"></div>
          <div className="small-article"></div>
          <div className="small-article"></div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTabContent;
