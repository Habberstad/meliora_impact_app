import "../../../styles/npo-profile-page-styles/project-tab-styles.css";
import { Button } from "@mui/material";
import { outlinedTabButtonStyle } from "../../../styles/button-style-config";
import WavesIcon from "@mui/icons-material/Waves";
import SquidImage from "../npo-media/squid_img.png";
import impactCardImg from "../npo-media/impact_cardpng.png";
import donationGoalImg from "../npo-media/donation_goal.png";
import timelineImg from "../npo-media/timeline_projects.png";
import contributorsImg from "../npo-media/contributors.png";

const test_image =
  "https://images.unsplash.com/photo-1652894449003-11e4228e9ae7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070";

const ProjectTabContent = () => {
  return (
    <div className="outer-project-content-container">
      <div className="projects-tab-navigation-section">
        <Button sx={outlinedTabButtonStyle}>Save the Coral</Button>
        <Button sx={outlinedTabButtonStyle}>Water for all</Button>
        <Button sx={outlinedTabButtonStyle}>Leve Havet</Button>
        <Button sx={outlinedTabButtonStyle}>Stop use of plastic</Button>
      </div>
      <div className="project-content-container">
        <div className="top-section">
          <div className="top-left-section">
            <div className="project-info-title">Water For All</div>
            <div className="project-info-text">
              Our ocean unifies our world like nothing else. And saving it from
              ongoing threats is a cause that affects us all. We are on the
              front lines of
            </div>
            <div className="tile-container">
              <div className="info-tile">
                <WavesIcon
                  sx={{ color: "#7209B7", width: "50px", height: "35px" }}
                />
                <div className="tile-data-text">1000km</div>
                <div className="tile-data-sub-text">Coral reefs preserved</div>
              </div>
              <div className="info-tile">
                <WavesIcon
                  sx={{ color: "#7209B7", width: "50px", height: "35px" }}
                />
                <div className="tile-data-text">1000km</div>
                <div className="tile-data-sub-text">Coral reefs preserved</div>
              </div>
              <div className="info-tile">
                <WavesIcon
                  sx={{ color: "#7209B7", width: "50px", height: "35px" }}
                />
                <div className="tile-data-text">1000km</div>
                <div className="tile-data-sub-text">Coral reefs preserved</div>
              </div>
            </div>
          </div>
          <div className="top-right-section">
            <img src={SquidImage} alt="test" />
          </div>
        </div>
        <div className="middle-section">
          <div className="impact-text-container">
            <div className="project-subheading">Our Ocean Needs You</div>
            <div className="impact-info-text">
              Our ocean unifies our world like nothing else. And saving it from
              ongoing threats is a cause that affects us all.
            </div>
            <div className="impact-info-text">
              We are on the front lines of ocean protection, investing in
              research, leadership and advocacy that advances science-based
              solutions that work.
            </div>
          </div>
          <div className="donation-image">
            <img src={donationGoalImg} alt="impact-stats" />
          </div>
        </div>
        <div className="middle-section">
          <div className="impact-image">
            <img src={impactCardImg} alt="impact-stats" />
          </div>
          <div className="impact-text-container">
            <div className="project-subheading">Our Ocean Needs You</div>
            <div className="impact-info-text">
              Our ocean unifies our world like nothing else. And saving it from
              ongoing threats is a cause that affects us all.
            </div>
            <div className="impact-info-text">
              We are on the front lines of ocean protection, investing in
              research, leadership and advocacy that advances science-based
              solutions that work.
            </div>
          </div>
        </div>
        <div className="project-timeline-section">
          <img src={timelineImg} alt="project-timeline" />
        </div>
        <div className="carousel-section">
          <div className="small-carousel-image">
            <img src={test_image} />
          </div>
          <div className="large-carousel-image">
            <img src={test_image} />
          </div>
          <div className="small-carousel-image">
            <img src={test_image} />
          </div>
        </div>
        <div className="contributors-section">
          <img src={contributorsImg} />
        </div>
        <div className="article-section">
          <div className="project-sub-heading">Latest Updates</div>
          <div className="article-card-container">
            <div className="big-article"></div>
            <div className="small-article"></div>
            <div className="small-article"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTabContent;
