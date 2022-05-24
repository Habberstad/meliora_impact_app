import { Button } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";

export function ProfileHeader({ data, name }) {
  console.log("profile-header", data);
  return (
    <div className="main-header-container">
      <div className="left-header-section">
        <div className="npo-header-title">{name}</div>
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
            <div className="tile-data-text">{data.tile_1.value}</div>
            <div className="tile-data-sub-text">{data.tile_1.description}</div>
          </div>
          <div className="header-tile">
            <WavesIcon
              sx={{ color: "#7209B7", width: "50px", height: "35px" }}
            />
            <div className="tile-data-text">{data.tile_2.value}</div>
            <div className="tile-data-sub-text">{data.tile_2.description}</div>
          </div>
          <div className="header-tile">
            <WavesIcon
              sx={{ color: "#7209B7", width: "50px", height: "35px" }}
            />
            <div className="tile-data-text">{data.tile_3.value}</div>
            <div className="tile-data-sub-text">{data.tile_3.description}</div>
          </div>
        </div>
      </div>
      <div className="right-image-section">
        <img src={data.header_image} />
      </div>
    </div>
  );
}
