import { Button } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";

export function ProfileHeader({ data, name }) {

  return (
    <div className="main-header-container">
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://images.unsplash.com/photo-1558216629-a2f7fe856792?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548")`,
        }}
        className="left-header-section"
      >
        <div
          style={{
            /*     backgroundColor: "rgba(0, 0, 0, 0.3)",*/
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0) 100%)",
            height: "496px",
            position: "absolute",
          }}
        >
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
              <div className="tile-data-sub-text">
                {data.tile_1.description}
              </div>
            </div>
            <div className="header-tile">
              <WavesIcon
                sx={{ color: "#7209B7", width: "50px", height: "35px" }}
              />
              <div className="tile-data-text">{data.tile_2.value}</div>
              <div className="tile-data-sub-text">
                {data.tile_2.description}
              </div>
            </div>
            <div className="header-tile">
              <WavesIcon
                sx={{ color: "#7209B7", width: "50px", height: "35px" }}
              />
              <div className="tile-data-text">{data.tile_3.value}</div>
              <div className="tile-data-sub-text">
                {data.tile_3.description}
              </div>
            </div>
          </div>
        </div>
        {/*      <div className="right-image-section">
        <img src={data.header_image} />
      </div>*/}
      </div>
    </div>
  );
}
