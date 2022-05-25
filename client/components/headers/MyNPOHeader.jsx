import { Box, Grid, Typography } from "@mui/material";
import headerImg from "../../media/header-image-partners.png";

export function MyNPOHeader() {
  return (
      <div>
        <Box className={"global-header-container"}>
          <Grid container columnSpacing={{ lg: 10, xl: 10 }}>
            <Grid item lg={6} xl={6}>
              <div className="global-header-title">My Partners</div>

              <div className="global-header-sub-title">
                Overview of NPOs you support
              </div>

              <div className="global-header-desc">
                <strong>Correlate</strong> with the projects directly tied to your supported NPOs. <br></br>
                Create a template to easily share content with your relations.
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
