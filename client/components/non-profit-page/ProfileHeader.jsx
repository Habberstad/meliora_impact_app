import { Button } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import { useEffect, useState } from "react";
import { LoginNextButtonB41 } from "../../styles/button-style-config";

export function ProfileHeader({
  user,
  allData,
  data,
  name,
  handleShowModal,
  handleShowDonationModal,
}) {
  const [isPartner, setIsPartner] = useState(false);
  console.log("profile header", allData);
  console.log("userinfo", user);

  //TODO bugcheck this logic, shows wrong button in header
  useEffect(() => {
    user.active_subscriptions.map((x) => {
      if (x.npo_id === allData._id) {
        setIsPartner(true);
      } else {
        setIsPartner(false);
      }
    });
  }, []);

  console.log("isPartner", isPartner);

  return (
    <div className="main-header-container">
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("${data.header_image}")`,
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
              {isPartner ? (
                <Button
                  onClick={handleShowDonationModal}
                  variant="contained"
                  sx={LoginNextButtonB41}
                >
                  Donate
                </Button>
              ) : (
                <Button
                  onClick={handleShowModal}
                  variant="contained"
                  sx={LoginNextButtonB41}
                >
                  Become partner
                </Button>
              )}
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
