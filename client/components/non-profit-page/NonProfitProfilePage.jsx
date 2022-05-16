import "../../styles/npo-profile-styles.css";
import { Button } from "@mui/material";
import { WavesIcon } from "@mui/icons-material/waves";

const NonProfitProfilePage = () => {
  return (
    <div className="main-profile-container">
      <div className="header-container">
        <div className="left-header-section">
          <div className="npo-header-title">The Williams Foundation</div>
          <div className="header-donate-btn-container">
            <div>
              <Button
                variant="contained"
                sx={{
                  width: "190px",
                  height: "60px",
                  borderRadius: "8px",
                  backgroundColor: "#7209B7",
                  "&:hover": {
                    backgroundColor: "#8d28ce",
                  },
                }}
              >
                Donate
              </Button>
            </div>
            <div className="video-text-btn">About us video</div>
          </div>
          <div className="header-tile-container">
            <div className="header-tile">
              <div>
                <WavesIcon />
              </div>
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
