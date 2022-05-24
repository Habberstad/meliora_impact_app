import { Box, Grid, Typography } from "@mui/material";
import sideImg from "../../media/discover_header.png";

export function Top(props) {
  return (
    <div>
      <Box className={"discover-top"}>
        <Grid container spacing={12}>
          <Grid item md={6}>
            <div className="discover-header-title">Discover</div>
            <div className="discover-header-subtitle">
              Explore other projects
            </div>
            <div className="discover-header-text">
              <strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet
              scriptorem, eos dolore evertitur ei, ferri omnium sea at.
            </div>
          </Grid>
          <Grid item md={6}>
            <img src={sideImg} alt={"side img"} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
