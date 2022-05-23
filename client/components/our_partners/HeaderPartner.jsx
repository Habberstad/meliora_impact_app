import { Box, Grid, Typography } from "@mui/material";
import headerImg from "../../media/header-image-partners.png";

export function HeaderPartner(props) {
  return (
    <div style={{ width: "100%" }}>
      <Box className={"partners-header-container"}>
        <Grid container spacing={12}>
          <Grid item md={5}>
            <Typography
              variant="h3"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              My Partners
            </Typography>
            <Typography
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
              variant="string"
              align="left"
              color="textSecondary"
              paragraph
            >
              <strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet
              scriptorem, eos dolore evertitur ei, ferri omnium sea at.
            </Typography>
          </Grid>

          <Grid item md={7}>
            <img
              style={{ width: "350px" }}
              src={headerImg}
              alt={"Header image"}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
