import { InfoTile } from "./InfoTile";
import SquidImage from "../npo-media/squid_img.png";
import donationGoalImg from "../npo-media/donation_goal.png";
import impactCardImg from "../npo-media/impact_cardpng.png";
import timelineImg from "../npo-media/timeline_projects.png";
import contributorsImg from "../npo-media/contributors.png";
import { DataTile } from "./DataTile";
import { NatureTile } from "./NatureTiles";

const test_image =
  "https://images.unsplash.com/photo-1652894449003-11e4228e9ae7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070";
export const ProjectContent = ({ data }) => {
  return (
    <>
      <div className="top-section">
        <div className="top-left-section">
          <div className="project-info-title">{data.top_section.title}</div>
          <div className="project-info-text">{data.top_section.paragraph}</div>
          <div className="project-tile-container">
            <InfoTile data={data.tiles[0]} />
            <DataTile data={data.tiles[1]} />
            <NatureTile data={data.tiles[2]} />
          </div>
        </div>
        <div className="top-right-section">
          <img src={SquidImage} alt="test" />
        </div>
      </div>
      <div className="middle-section">
        <div className="impact-text-container">
          <div className="project-subheading">{data.middle_section.title}</div>
          <div className="impact-info-text">
            {data.middle_section.paragraph}
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
          <div className="project-subheading">{data.bottom_section.title}</div>
          <div className="impact-info-text">
            {data.bottom_section.paragraph}
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
        {/*        <div className="project-sub-heading">Latest Updates</div>
        <div className="article-card-container">
          <div className="big-article"></div>
          <div className="small-article"></div>
          <div className="small-article"></div>
        </div>*/}
      </div>
    </>
  );
};
