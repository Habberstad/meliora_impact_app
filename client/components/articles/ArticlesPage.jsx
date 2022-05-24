import { Button, Grid, Link } from "@mui/material";
import { useContext, useState } from "react";
import "../../styles/articlesPage.css";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { useLoading } from "../../useLoading";
import {
  selectedTabStyle,
  navButtonStyle,
  hoverTabStyle,
} from "../../styles/button-style-config";
import { ArticlesHeader } from "../headers/ArticlesHeader";

const ArticlesPage = () => {
  const [category, setCategory] = useState("water");
  const [npoName, setNpoName] = useState("");
  const [_id, set_Id] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles({ category, _id }),
    [category]
  );

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );

  function handleNavigationAndFiltering(event) {
    setCategory(event);
    setSelectedTab(event);
  }

  return (
    <div className="articles-wrapper">
      <ArticlesHeader />

      <div className="articles-sorter">
        <Grid container justifyContent="center">
          <Grid className={"all-filter"} item>
            <Button
              style={{ textAlign: "center", padding: "20px 30px 5px 30px" }}
              className="test-test"
              onClick={() => handleNavigationAndFiltering("")}
              sx={selectedTab === "" ? selectedTabStyle : hoverTabStyle}
            >
              Test
            </Button>
          </Grid>
          <Grid className={"water-filter"} item>
            <Button
              style={{ textAlign: "center", padding: "20px 30px 5px 30px" }}
              onClick={() => handleNavigationAndFiltering("water")}
              sx={selectedTab === "water" ? selectedTabStyle : hoverTabStyle}
            >
              Water
            </Button>
          </Grid>
          <Grid className={"knowledge-filter"} item>
            <Button
              style={{ textAlign: "center", padding: "20px 30px 5px 30px" }}
              onClick={() => handleNavigationAndFiltering("knowledge")}
              sx={
                selectedTab === "knowledge" ? selectedTabStyle : hoverTabStyle
              }
            >
              Knowledge
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className="articles-top-section">
        <Grid container columnSpacing={{ lg: 4, xl: 4 }} rowSpacing={{ md: 4 }}>
          <Grid item md={12} lg={6} xl={6}>
            <div className="container-big">
              <div className={"container-content-big"}>
                <div className={"npo-text-big"}>
                  <span className={"npo-name"}>{data[0].npoName}</span>
                </div>
                <Link href={"/articles/article?id=" + data[0]._id}>
                  <img src={data[0].image} alt={data[0].alt} />
                </Link>
                <div className={"card-content-container-big"}>
                  <div className={"date-text-big"}>
                    <span className={"card-content-date"}>{data[0].date}</span>
                  </div>

                  <div className={"content-text-big"}>
                    <span className={"card-content-text"}>
                      {data[0].description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid
            container
            item
            lg={6}
            xl={6}
            rowSpacing={{ md: 4, lg: 4, xl: 4 }}
          >
            <Grid item md={12} lg={12} xl={12}>
              <div className="container-medium">
                <div className={"container-content-medium"}>
                  <div className={"npo-text-medium"}>
                    <span className={"npo-name"}>{data[1].npoName}</span>
                  </div>
                  <Link href={"/articles/article?id=" + data[1]._id}>
                    <img src={data[1].image} alt={"das"} />
                  </Link>
                  <div className={"card-content-container-medium"}>
                    <div className={"date-text-medium"}>
                      <span className={"card-content-date"}>
                        {data[1].date}
                      </span>
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

            <Grid
              container
              item
              rowSpacing={{ xl: 4 }}
              columnSpacing={{ xl: 4, lg: 4, md: 4 }}
            >
              <Grid item md={6} lg={6} xl={6}>
                <div className="container-small">
                  <div className={"container-content-small"}>
                    <div className={"npo-text-small"}>
                      <span className={"npo-name"}>{data[2].npoName}</span>
                    </div>
                    <Link href={"/articles/article?id=" + data[2]._id}>
                      <img src={data[2].image} alt={"das"} />
                    </Link>
                    <div className={"card-content-container-small"}>
                      <div className={"date-text-small"}>
                        <span className={"card-content-date"}>
                          {data[2].date}
                        </span>
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

              <Grid item md={6} lg={6} xl={6}>
                <div className="container-small">
                  <div className={"container-content-small"}>
                    <div className={"npo-text-small"}>
                      <span className={"npo-name"}>{data[3].npoName}</span>
                    </div>
                    <Link href={"/articles/article?id=" + data[3]._id}>
                      <img src={data[3].image} id={"bilde"} alt={"das"} />
                    </Link>
                    <div className={"card-content-container-small"}>
                      <div className={"date-text-small"}>
                        <span className={"card-content-date"}>
                          {data[3].date}
                        </span>
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
          </Grid>
        </Grid>
      </div>

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
                <Link href={"/articles/article?id=" + data[1]._id}>
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
                <Link href={"/articles/article?id=" + data[3]._id}>
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
                <Link href={"/articles/article?id=" + data[3]._id}>
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
    </div>
  );
};

export default ArticlesPage;
