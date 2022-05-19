import { Button } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";

export function ProfileHeader({ nonProfitData }) {
  return (
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
            <WavesIcon
              sx={{ color: "#7209B7", width: "50px", height: "35px" }}
            />
            <div className="tile-data-text">1000km</div>
            <div className="tile-data-sub-text">Coral reefs preserved</div>
          </div>
          <div className="header-tile">
            <WavesIcon
              sx={{ color: "#7209B7", width: "50px", height: "35px" }}
            />
            <div className="tile-data-text">1000km</div>
            <div className="tile-data-sub-text">Coral reefs preserved</div>
          </div>
          <div className="header-tile">
            <WavesIcon
              sx={{ color: "#7209B7", width: "50px", height: "35px" }}
            />
            <div className="tile-data-text">1000km</div>
            <div className="tile-data-sub-text">Coral reefs preserved</div>
          </div>
        </div>
      </div>
      <div className="right-image-section">
        <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80" />
      </div>
    </div>
  );
}
