import { Box, Grid, Typography } from "@mui/material";
import headerImg from "../../media/header-image-partners.png";

export function MyNPOHeader() {
  return (
    <div style={{ width: "100%" }}>
      <Box className={"global-header-container"}>
        <Grid container columnSpacing={{ lg: 10, xl: 10 }}>
          <Grid item lg={6} xl={6}>
            <Typography
              className="global-header-title"
              variant="h3"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              My Partners
            </Typography>
            <Typography
              className="global-header-sub-title"
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Overview of NGOs you support
            </Typography>
            <br />
            <br />
            <Typography
              className="global-header-desc"
              variant="string"
              align="left"
              color="textSecondary"
              paragraph
            >
              <strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet
              scriptorem, eos dolore evertitur ei, ferri omnium sea at.
            </Typography>
          </Grid>

          <Grid item lg={5} xl={5}>
            <img
              style={{ width: "350px" }}
              src={headerImg}
              alt={"MyNPOHeader image"}
            />
          </Grid>

          <Grid item lg={1} xl={1}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
