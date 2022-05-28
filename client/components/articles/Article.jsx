import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useContext, useState } from "react";
import "../../styles/article-styles.css";
import { useLoading } from "../../useLoading";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

const Article = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const _id = queryParams.get("id");
  const { getArticles } = useContext(ArticleApiContext);

  const { loading, error, data } = useLoading(
    async () => await getArticles({ _id }),
    []
  );

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  return (
    <div className="article-container">
      <div>
        <div className="article-header-title">{data[0].main_title}</div>
        <img
          src={data[0].header_image}
          alt="header-img"
          className="article-header-img"
        />
      </div>
      <Link to={"/articles"} style={{ textDecoration: "none" }}>
        <div className="article-back-button">
          <ArrowBackIosIcon />
          Back
        </div>
      </Link>

      <div className="article-wrapper">
        <Grid
          className="article-top-section"
          container
          columnSpacing={{ lg: 6, xl: 6 }}
        >
          <Grid item lg={4} xl={4}>
            <div className="article-top-section-sub-title">
              {data[0].sub_title}
            </div>
            <div className="article-date-box">{data[0].date}</div>
          </Grid>
          <Grid item lg={4} xl={4}>
            <div className="article-top-section-paragraph">
              <p>{data[0].paragraph_1_1}</p>
              <p>{data[0].paragraph_1_2}</p>
            </div>
          </Grid>
          <Grid item lg={4} xl={4}>
            <div className="article-top-section-paragraph">
              <p>{data[0].paragraph_2}</p>
            </div>
          </Grid>
        </Grid>

        <Grid
          className="article-middle-section"
          container
          columnSpacing={{ lg: 6, xl: 6 }}
        >
          <Grid item lg={4} xl={4}>
            <div className="article-middle-section-header">
              {data[0].paragraph_3_header}
            </div>
            <div className="article-middle-section-paragraph">
              <p>{data[0].paragraph_3_1}</p>
              <p>{data[0].paragraph_3_2}</p>
            </div>
          </Grid>

          <Grid container item lg={8} xl={8} rowSpacing={{ lg: 4, xl: 4 }}>
            <Grid item>
              <div>
                <img
                  src={data[0].middle_image}
                  alt="article-middle-section-img"
                  className="article-middle-section-img"
                />
              </div>
            </Grid>
            <Grid
              container
              item
              lg={12}
              xl={12}
              columnSpacing={{ lg: 6, xl: 6 }}
            >
              <Grid item lg={6} xl={6}>
                <div
                  className="article-middle-section-paragraph-2"
                  style={{
                    borderLeft: "solid 1px",
                    borderColor: "#c4c4c4",
                    paddingLeft: "20px",
                  }}
                >
                  <p>{data[0].paragraph_4}</p>
                </div>
              </Grid>
              <Grid item lg={6} xl={6}>
                <div className="article-middle-section-paragraph-2">
                  <p>{data[0].paragraph_5}</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          className="article-bottom-section"
          container
          columnSpacing={{ lg: 4, xl: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={3.5} xl={3.5}>
            <div>
              <img
                src={data[0].carousel_image1}
                alt="article-bottom_section_img1"
                className="article-bottom-section-img1"
              />
            </div>
          </Grid>
          <Grid item lg={5} xl={5}>
            <div>
              <img
                src={data[0].carousel_image2}
                alt="bottom_section_img2"
                className="article-bottom-section-img2"
              />
            </div>
          </Grid>
          <Grid item lg={3.5} xl={3.5}>
            <div>
              <img
                src={data[0].carousel_image3}
                alt="bottom_section_img3"
                className="article-bottom-section-img3"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Article;
