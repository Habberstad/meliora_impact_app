import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useContext, useState} from "react";
import "../../styles/article-styles.css";
import {useLoading} from "../../useLoading";
import {ArticleApiContext} from "../../api-client/articlesApiContext";

const Article = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const _id = queryParams.get('id');
  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles({ _id }),
    []
  );

  console.log(_id);
  console.log(data);


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
    <div className="article-container">
      <div>
        <div className="header-title">{data[0].main_title}</div>
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
        <Grid className="top-section" container>
          <Grid item sm={12} md={12} lg={4} xl={5.5}>
            <div className="top-section-item-1">
              {data[0].sub_title}
            </div>
            <div className="date-box">{data[0].date}</div>
          </Grid>
          <Grid item  lg={4} xl={3.5}>
            <div className="top-section-item-2">
              <p>
                {data[0].paragraph_1_1}
              </p>
              <p>
                {data[0].paragraph_1_2}
              </p>
            </div>
          </Grid>
          <Grid item lg={4} xl={3}>
            <div className="top-section-item-2">
              <p>
                {data[0].paragraph_2}
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid className="middle-section" container>
          <Grid item lg={3.5} xl={3.5}>
            <div className="middle-section-item-1">
              <h2>{data[0].paragraph_3_header}</h2>
              <p>
                {data[0].paragraph_3_1}
              </p>
              <p>
                {data[0].paragraph_3_2}
              </p>
            </div>
          </Grid>

          <Grid container lg={8.5} xl={8.5}>
            <Grid item>
              <img
                src={data[0].middle_image}
                alt="middle-section-img"
                className="article-middle-section-img"
              />
            </Grid>
            <Grid item sm={1} md={1} lg={1} xl={2}>
              <div className="middle-section-item-2">
                <p></p>
              </div>
            </Grid>
            <Grid item sm={5.5} md={5.5} lg={5.5} xl={5}>
              <div className="middle-section-item-2">
                <p>
                  {data[0].paragraph_4}
                </p>
              </div>
            </Grid>
            <Grid item sm={5.5} md={5.5} lg={5.5} xl={5}>
              <div className="middle-section-item-3">
                <p>
                  {data[0].paragraph_5}
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <div className="bottom-section">
          <div>
            <img
              src={data[0].carousel_image1}
              alt="bottom_section_img1"
              className="bottom-section-img1"
            />
          </div>


          <div>
            <img
              src={data[0].carousel_image2}
              alt="bottom_section_img2"
              className="bottom-section-img2"
            />
          </div>

          <div>
            <img
              src={data[0].carousel_image3}
              alt="bottom_section_img3"
              className="bottom-section-img3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;