import * as React from "react";
import Grid from "@mui/material/Grid";
import FishHeader from "../../media/article_header.png";
import CoralImg from "../../media/coral_img.png";
import FishImg1 from "../../media/article_bottom_img1.png";
import FishImg2 from "../../media/article_bottom_img2.png";
import FishImg3 from "../../media/article_bottom_img3.png";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { mock_article } from "../../mock_data/article";

const Article = () => {
  const [article, setArticle] = useState({ mock_article });

  if (!article) return <div>loading....</div>;

  if (article) {
    return (
      <div className="article-container">
        <div>
          <div className="header-title">Leve Havet</div>
          <img
            src={FishHeader}
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
                How Leve Havet is saving the planet by saving the corals.
              </div>
              <div className="date-box">April 2018</div>
            </Grid>
            <Grid item  lg={4} xl={3.5}>
              <div className="top-section-item-2">
                <p>
                  <span style={{ fontWeight: "bold" }}>Lorem</span> ipsum dolor
                  sit amet, sed ea solum movet scriptorem, eos dolore evertitur
                  ei, ferri omnium sea at. Harum accusam suscipiantur in pri,
                  constituto appellantur consequuntur ei his.
                </p>
                <p>
                  Pro at mollis aliquid civibus. Dicam ornatus ex duo, duo te
                  aeque bonorum. Harum accusam suscipiantur in pri, constituto
                  appellantur consequuntur ei his. Harum accusam suscipiantur in
                  pri, constituto appellantur consequuntur ei his.
                </p>
              </div>
            </Grid>
            <Grid item  lg={4} xl={3}>
              <div className="top-section-item-2">
                <p>
                  Lorem ipsum dolor sit amet, sed ea solum movet scriptorem, eos
                  dolore evertitur ei, ferri omnium sea at. Harum accusam
                  suscipiantur in pri, constituto appellantur consequuntur ei
                  his. Pro at mollis aliquid civibus. Dicam ornatus ex duo, duo
                  te aeque bonorum. Harum accusam suscipiantur in pri,
                  constituto appellantur consequuntur ei his. Harum accusam
                  suscipiantur in pri, constituto appellantur consequuntur ei
                  his.
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid className="middle-section" container spacing={0}>
            <Grid item lg={3.5} xl={3.5}>
              <div className="middle-section-item-1">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, sed ea solum movet scriptorem, eos
                  dolore evertitur ei, ferri omnium sea at. Harum accusam
                  suscipiantur in pri, constituto appellantur consequuntur ei
                  his. Pro at mollis aliquid civibus. Dicam ornatus ex duo, duo
                  te aeque bonorum. Harum accusam suscipiantur in pri,
                  constituto appellantur consequuntur ei his. Harum accusam
                  suscipiantur in pri, constituto appellantur consequuntur ei
                  his.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, sed ea solum movet scriptorem, eos
                  dolore evertitur ei, ferri omnium sea at. Harum accusam
                  suscipiantur in pri, constituto appellantur consequuntur ei
                  his. Pro at mollis aliquid civibus. Dicam ornatus ex duo, duo
                  te aeque bonorum. Harum accusam suscipiantur in pri,
                  constituto appellantur consequuntur ei his. Harum accusam
                  suscipiantur in pri, constituto appellantur consequuntur ei
                  his.
                </p>
              </div>
            </Grid>

            <Grid container lg={8.5} xl={8.5}>
              <Grid item>
                <img
                  src={CoralImg}
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
                    <span style={{ fontWeight: "bold" }}>Lorem</span> ipsum
                    dolor sit amet, sed ea solum movet scriptorem, eos dolore
                    evertitur ei, ferri omnium sea at. Harum accusam
                    suscipiantur in pri, constituto appellantur consequuntur ei
                    his. Pro at mollis aliquid civibus. Dicam ornatus ex duo,
                    duo te aeque bonorum.
                  </p>
                </div>
              </Grid>
              <Grid item sm={5.5} md={5.5} lg={5.5} xl={5}>
                <div className="middle-section-item-3">
                  <p>
                    Lorem ipsum dolor sit amet, sed ea solum movet scriptorem,
                    eos dolore evertitur ei, ferri omnium sea at. Harum accusam
                    suscipiantur in pri, constituto appellantur consequuntur ei
                    his. Pro at mollis aliquid civibus. Dicam ornatus ex duo,
                    duo te aeque bonorum.
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="bottom-section" container spacing={0}>
            <Grid item lg={3.5} xl={3.5}>
              <img
                src={FishImg1}
                alt="bottom_section_fish1"
                className="bottom-section-fish1"
              />
            </Grid>
            <Grid item lg={5} xl={5}>
              <img
                src={FishImg2}
                alt="bottom_section_fish2"
                className="bottom-section-fish2"
              />
            </Grid>
            <Grid item lg={3.5} xl={3.5}>
              <img
                src={FishImg3}
                alt="bottom_section_fish3"
                className="bottom-section-fish3"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default Article;
