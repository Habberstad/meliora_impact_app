import "../../styles/npo-profile-styles.css";
import { Button } from "@mui/material";

const NonProfitProfilePage = () => {
  return (
    <div className="main-profile-container">
      <div className="header-container">
        <div className="left-header-section">
          <div className="npo-header-title">The Williams Foundation</div>
          <div className="header-donate-btn-container">
            <div>
              <Button>Donate</Button>
            </div>
            <div>About us video</div>
          </div>
          <div className="header-tile-container">
            <div className="header-tile">
              <div>Icon</div>
              <div>1000km</div>
              <div>Coral reefs preserved</div>
            </div>
            <div className="header-tile">
              <div>Icon</div>
              <div>1000km</div>
              <div>Coral reefs preserved</div>
            </div>
            <div className="header-tile">
              <div>Icon</div>
              <div>1000km</div>
              <div>Coral reefs preserved</div>
            </div>
          </div>
        </div>
        <div className="right-image-section">image here</div>
      </div>
    </div>
  );
};

export default NonProfitProfilePage;
