import { Box, Grid, Typography } from "@mui/material";
import sideImg from "./side-img.png";

export function Top(props) {
  return (
    <Box sx={{ width: "100%" }} className={"discover-top"}>
    <Grid container spacing={12}>
      <Grid item md={6}>
        <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
          Discover
        </Typography>
        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
          Explore other projects
        </Typography>
        <br/>
        <br/>
        <Typography variant="string" align="left" color="textSecondary" paragraph>
          <strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet scriptorem, eos dolore evertitur ei, ferri
          omnium sea at.
        </Typography>
      </Grid>

      <Grid item md={6}>
        <img src={sideImg} alt={"side img"} />
      </Grid>
    </Grid>
  </Box>
  );
}