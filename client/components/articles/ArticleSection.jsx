import { Grid, Link } from "@mui/material";
import * as React from "react";
import { useLoading } from "../../useLoading";
import { useContext } from "react";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import "../../styles/dashboard.css";
import { ContainerMedium } from "./ContainerMedium";
import { ContainerSmallLeft } from "./ContainerSmallLeft";
import { ContainerSmallRight } from "./ContainerSmallRight";

export function ArticleSection(props) {
  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles(),
    []
  );

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  return (
    <div className="articles-bottom-section">
      <Grid
        container
        columnSpacing={{ md: 4, lg: 4, xl: 4 }}
        rowSpacing={{ md: 4, lg: 4 }}
      >
        <Grid item lg={6} xl={6}>
          <ContainerMedium data={data} />
        </Grid>
        <Grid item md={6} lg={3} xl={3}>
          <ContainerSmallLeft data={data} />
        </Grid>

        <Grid item md={6} lg={3} xl={3}>
          <ContainerSmallRight data={data} />
        </Grid>
      </Grid>
    </div>
  );
}
