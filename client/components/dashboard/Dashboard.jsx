import * as React from "react";
import { useLoading } from "../../useLoading";
import { Grid, Link } from "@mui/material";
import { useContext, useState } from "react";
import "../../styles/dashboard.css";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { ArticleApiContext } from "../../api-client/articlesApiContext";

const Dashboard = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles({  }),
    []
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }

  return (
    <div className={"dashboard-container"}>
      <h1>Hi, Welcome back </h1>
      <Grid container direction={"column"}>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className={"test"}
        >
          <Grid item>
            <div className="students-impact-container">
                <div className="students-impact-icon">
                  <SchoolIcon fontSize={"large"}/>
                </div>
                <div className="students-impact-count">
                  <a>3751</a>
                </div>
                <div className="students-impact-content">
                  <a>students impacted</a>
                </div>
              </div>
          </Grid>

          <Grid item className={"socialmedia-template"}>
            <Grid container item direction="column" className={"socialmedia-template-container"}>
              <img
                src={
                  "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200"
                }
                alt={"das"}
              />
              <div className={"socialmedia-template-container-shadow"}></div>
              <Grid item className={"socialmedia-template-content-top"}>
                <a>Share on Social Media</a>
              </Grid>
              <Grid item className={"socialmedia-template-content-bot"}>
                <a>View templates</a>
              </Grid>
              </Grid>
          </Grid>
          <Grid item>
            <h1>Highlighted partners</h1>
            <LocalHospitalIcon />
            <h2>Asha Fundation</h2>
            <a>Vaccination Program</a>
            <></>
            <a>Infant Mortality</a>
            <></>
            <a>Dental program</a>
            <></>
          </Grid>
        </Grid>
        <div className="articles-bottom-section">
          <div className="bottom-header">Articles You Should Check Out</div>
          <Grid
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

            <Grid item md={6} lg={6} xl={3}>
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

            <Grid item md={6} lg={6} xl={3}>
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
        </div>
      </Grid>
    </div>
  );
};

export default Dashboard;
