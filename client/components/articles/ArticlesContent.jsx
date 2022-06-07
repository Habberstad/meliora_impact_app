import { Grid, Link } from "@mui/material";
import * as PropTypes from "prop-types";
import { ArticlesTopContent } from "./ArticlesTopContent";

ArticlesTopContent.propTypes = { data: PropTypes.any };

export function ArticlesContent({ filterList }) {
  const data = filterList();
  return (
    <>
      <ArticlesTopContent data={data} />

      <div className="articles-bottom-section">
        <div className="bottom-header">Articles You Should Check Out</div>
        <Grid
          container
          columnSpacing={{ md: 4, lg: 4, xl: 4 }}
          rowSpacing={{ md: 4, lg: 4 }}
        >
          <Grid item lg={6} xl={6}>
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

          <Grid item md={6} lg={3} xl={3}>
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

          <Grid item md={6} lg={3} xl={3}>
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
    </>
  );
}
