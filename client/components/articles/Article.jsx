import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { mock_article } from "../../mock_data/article";
import "../../styles/article-styles.css";

const Article = () => {
  const [article, setArticle] = useState({ mock_article });

  if (!article) return <div>loading....</div>;

  if (article) {
    return (
      <div className="article-container">
        <div>
          <div className="header-title">{article.mock_article.main_title}</div>
          <img
            src={article.mock_article.header_image}
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
          <Grid className="top-section" container spacing={0}>
            <Grid item sm={12} md={12} lg={4} xl={5.5}>
              <div className="top-section-item-1">
                {article.mock_article.sub_title}
              </div>
              <div className="date-box">{article.mock_article.date}</div>
            </Grid>
            <Grid item  lg={4} xl={3.5}>
              <div className="top-section-item-2">
                <p>
                  {article.mock_article.paragraph_1_1}
                </p>
                <p>
                  {article.mock_article.paragraph_1_2}
                </p>
              </div>
            </Grid>
            <Grid item  lg={4} xl={3}>
              <div className="top-section-item-2">
                <p>
                  {article.mock_article.paragraph_2}
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid className="middle-section" container spacing={0}>
            <Grid item lg={3.5} xl={3.5}>
              <div className="middle-section-item-1">
                <h2>{article.mock_article.paragraph_3_header}</h2>
                <p>
                  {article.mock_article.paragraph_3_1}
                </p>
                <p>
                  {article.mock_article.paragraph_3_2}
                </p>
              </div>
            </Grid>

            <Grid container lg={8.5} xl={8.5}>
              <Grid item>
                <img
                  src={article.mock_article.middle_image}
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
                    {article.mock_article.paragraph_4}
                  </p>
                </div>
              </Grid>
              <Grid item sm={5.5} md={5.5} lg={5.5} xl={5}>
                <div className="middle-section-item-3">
                  <p>
                    {article.mock_article.paragraph_5}
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <div className="bottom-section">
            <div>
              <img
                  src={article.mock_article.carousel_image1}
                  alt="bottom_section_img1"
                  className="bottom-section-img1"
              />
            </div>


            <div>
              <img
                  src={article.mock_article.carousel_image2}
                  alt="bottom_section_img2"
                  className="bottom-section-img2"
              />
            </div>

            <div>
              <img
                  src={article.mock_article.carousel_image3}
                  alt="bottom_section_img3"
                  className="bottom-section-img3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Article;
