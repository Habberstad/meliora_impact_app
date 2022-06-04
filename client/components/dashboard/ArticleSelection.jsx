import { Grid, Link } from "@mui/material";
import * as React from "react";
import { useLoading } from "../../useLoading";
import { useContext } from "react";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import "../../styles/dashboard.css";

export function ArticleSelection(props) {
  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles(),
    []
  );

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  return (
    <div className="articles-bottom-section">
      <div className="bottom-header">Latest updates</div>
      <Grid
        item
        container
        columnSpacing={{ md: 4, lg: 4, xl: 4 }}
        rowSpacing={{ md: 4, lg: 4 }}
      >
        <Grid item lg={12} xl={6}>
          <div className="container-medium">
            <div className={"container-content-medium"}>
              <div className={"npo-text-medium"}>
                <span className={"npo-name"}>{data[1].npoName}</span>
              </div>
              <Link href={"/articles/" + data[1]._id}>
                <img src={data[1].image} alt={"das"} />
              </Link>
              <div className={"card-content-container-medium"}>
                <div className={"date-text-medium"}>
                  <span className={"card-content-date"}>{data[1].date}</span>
                </div>
                <div className={"content-text-medium"}>
                  <span className={"card-content-text"}>
                    {data[1].description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={6} lg={6} xl={3}>
          <div className="container-small">
            <div className={"container-content-small"}>
              <div className={"npo-text-small"}>
                <span className={"npo-name"}>{data[2].npoName}</span>
              </div>
              <Link href={"/articles/" + data[2]._id}>
                <img src={data[2].image} id={"bilde"} alt={"das"} />
              </Link>
              <div className={"card-content-container-small"}>
                <div className={"date-text-small"}>
                  <span className={"card-content-date"}>{data[2].date}</span>
                </div>
                <div className={"content-text-small"}>
                  <span className={"card-content-text-small"}>
                    {data[2].description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item md={6} lg={6} xl={3}>
          <div className="container-small">
            <div className={"container-content-small"}>
              <div className={"npo-text-small"}>
                <span className={"npo-name"}>{data[3].npoName}</span>
              </div>
              <Link href={"/articles/" + data[3]._id}>
                <img src={data[3].image} id={"bilde"} alt={"das"} />
              </Link>
              <div className={"card-content-container-small"}>
                <div className={"date-text-small"}>
                  <span className={"card-content-date"}>{data[3].date}</span>
                </div>
                <div className={"content-text-small"}>
                  <span className={"card-content-text-small"}>
                    {data[3].description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
