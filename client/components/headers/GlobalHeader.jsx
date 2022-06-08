import { Box, Grid } from "@mui/material";
import "../../styles/header-styles.css";

export function GlobalHeader({ title, subtitle, desc, image }) {
  return (
    <div>
      <Box className={"global-header-container"}>
        <Grid container columnSpacing={{ lg: 10, xl: 10 }}>
          <Grid item lg={6} xl={6}>
            <div className="global-header-title">{title}</div>

            <div className="global-header-sub-title">{subtitle}</div>

            <div className="global-header-desc">{desc}</div>
          </Grid>

          <Grid item lg={5} xl={5}>
            <div>
              <img
                className="global-header-img"
                src={image}
                alt={"Header image"}
              />
            </div>
          </Grid>

          <Grid item lg={1} xl={1} />
        </Grid>
      </Box>
    </div>
  );
}
