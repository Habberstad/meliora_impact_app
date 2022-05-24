import { Box, Grid } from "@mui/material";
import headerImg from "../../media/articles_header_image.png"
import "../../styles/header-styles.css";

export function ArticlesHeader() {
  return (
    <div>
      <Box className={"global-header-container"}>
        <Grid container columnSpacing={{ lg: 10, xl: 10 }}>
          <Grid item lg={6} xl={6}>
            <div className="global-header-title">Meliora Articles</div>

            <div className="global-header-sub-title">
              Enjoy regular project updates
            </div>

            <div className="global-header-desc">
              <strong>Inspiring</strong> articles from the projects directly
              associated to the Meliora platform. Take a moment to connect with
              these exciting news.
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
