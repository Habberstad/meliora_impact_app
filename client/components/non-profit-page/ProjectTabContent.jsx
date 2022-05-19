import "../../styles/npo-profile-page-styles/project-tab-styles.css";
import { Button } from "@mui/material";
import { outlinedTabButtonStyle } from "../../styles/button-style-config";
import WavesIcon from "@mui/icons-material/Waves";
import SquidImage from "./npo-media/squid_img.png";

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
        <div className="top-section"></div>
      </div>
    </div>
  );
};

export default ProjectTabContent;
