import { Grid } from "@mui/material";
import { ContainerSmallRight } from "./ContainerSmallRight";
import { ContainerMedium } from "./ContainerMedium";
import { ContainerSmallLeft } from "./ContainerSmallLeft";
import { ContainerBig } from "./ContainerBig";

export function ArticlesContent({ filterList }) {
  const data = filterList();
  return (
    <div className="articles-top-section">
      <Grid container columnSpacing={{ lg: 4, xl: 4 }} rowSpacing={{ md: 4 }}>
        <Grid item md={12} lg={6} xl={6}>
          <ContainerBig data={data} />
        </Grid>

        <Grid container item lg={6} xl={6} rowSpacing={{ md: 4, lg: 4, xl: 4 }}>
          <Grid item md={12} lg={12} xl={12}>
            <ContainerMedium data={data} />
          </Grid>

          <Grid
            container
            item
            rowSpacing={{ xl: 4 }}
            columnSpacing={{ xl: 4, lg: 4, md: 4 }}
          >
            <Grid item md={6} lg={6} xl={6}>
              <ContainerSmallLeft data={data} />
            </Grid>

            <Grid item md={6} lg={6} xl={6}>
              <ContainerSmallRight data={data} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
