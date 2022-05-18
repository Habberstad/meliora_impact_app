import "../../styles/npo-profle-page-styles/overview-styles.css";
import Timeline from "./static_timeline.png";
import MissionMap from "./mission_map_img.png";
import WavesIcon from "@mui/icons-material/Waves";

const OverviewContent = () => {
  return (
    <div>
      <div className="timeline-section">
        <img src={Timeline} alt="test" />
      </div>
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
            <WavesIcon
              sx={{ color: "#A400FF", width: "100px", height: "750px" }}
            />
            The ocean takes up 70% of our earth, it is our duty to take care of
            it.
          </div>
          <div className="vision-box">
            The ocean takes up 70% of our earth, it is our duty to take care of
            it.
          </div>
        </div>
        <div className="vision-box-section">
          <div className="vision-box">
            The ocean takes up 70% of our earth, it is our duty to take care of
            it.
          </div>
          <div className="vision-box">
            The ocean takes up 70% of our earth, it is our duty to take care of
            it.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
