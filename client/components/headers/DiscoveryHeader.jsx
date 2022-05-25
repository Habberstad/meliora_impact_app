import { Box, Grid } from "@mui/material";
import headerImg from "../../media/discover_header.png";
import "../../styles/header-styles.css";

export function DiscoveryHeader() {
  return (
    <div>
      <Box className={"global-header-container"}>
        <Grid container columnSpacing={{ lg: 10, xl: 10 }}>
          <Grid item lg={6} xl={6}>
            <div className="global-header-title">Discover</div>

            <div className="global-header-sub-title">
              Explore other projects
            </div>

            <div className="global-header-desc">
              <strong>Dive</strong> in and learn about which projects our passionate NPOs are engaged with.
              Quickly sort and collaborate on different propositions we can offer.
            </div>
          </Grid>

          <Grid item lg={5} xl={5}>
            <div>
              <img
                className="global-header-img"
                src={headerImg}
                alt={"Header image"}
              />
            </div>
          </Grid>

          <Grid item lg={1} xl={1}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
