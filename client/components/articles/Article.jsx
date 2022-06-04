import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useContext, useState } from "react";
import "../../styles/article-styles.css";
import { useLoading } from "../../useLoading";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

const Article = () => {
  const urlPathParam = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );

  const { getArticleById } = useContext(ArticleApiContext);
  const navigate = useNavigate();

  const { loading, error, data } = useLoading(
    async () => await getArticleById(urlPathParam),
    []
  );

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  return (
    <div className="article-container">
      <div>
        <div className="article-header-title">{data.main_title}</div>
        <img
          src={data.header_image}
          alt="header-img"
          className="article-header-img"
        />
      </div>
      <div className="article-back-button" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon />
        Back
      </div>

      <div className="article-wrapper">
        <Grid
          className="article-top-section"
          container
          columnSpacing={{ lg: 6, xl: 6 }}
        >
          <Grid item lg={4} xl={4}>
            <div className="article-top-section-sub-title">
              {data.sub_title}
            </div>
            <div className="article-date-box">{data.date}</div>
          </Grid>
          <Grid item lg={4} xl={4}>
            <div className="article-top-section-paragraph">
              <p>{data.paragraph_1_1}</p>
              <p>{data.paragraph_1_2}</p>
            </div>
          </Grid>
          <Grid item lg={4} xl={4}>
            <div className="article-top-section-paragraph">
              <p>{data.paragraph_2}</p>
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
              {data.paragraph_3_header}
            </div>
            <div className="article-middle-section-paragraph">
              <p>{data.paragraph_3_1}</p>
              <p>{data.paragraph_3_2}</p>
            </div>
          </Grid>

          <Grid container item lg={8} xl={8} rowSpacing={{ lg: 4, xl: 4 }}>
            <Grid item>
              <div>
                <img
                  src={data.middle_image}
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
                  <p>{data.paragraph_4}</p>
                </div>
              </Grid>
              <Grid item lg={6} xl={6}>
                <div className="article-middle-section-paragraph-2">
                  <p>{data.paragraph_5}</p>
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
                src={data.carousel_image1}
                alt="article-bottom_section_img1"
                className="article-bottom-section-img1"
              />
            </div>
          </Grid>
          <Grid item lg={5} xl={5}>
            <div>
              <img
                src={data.carousel_image2}
                alt="bottom_section_img2"
                className="article-bottom-section-img2"
              />
            </div>
          </Grid>
          <Grid item lg={3.5} xl={3.5}>
            <div>
              <img
                src={data.carousel_image3}
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
