import * as React from "react";
import Grid from "@mui/material/Grid";
import FishHeader from "../../media/article-header.png";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Article = () => {
  return (
    <div className="article-container">
      <div>
        <div className="header-title">Leve Havet</div>
        <img src={FishHeader} alt="header-img" className="article-header" />
      </div>
      <Link to={"/articles"} style={{ textDecoration: "none" }}>
        <div className="article-back-button">
          <ArrowBackIosIcon />
          Back
        </div>
      </Link>

      <div className="article-wrapper">
        <Grid className="top-section" container spacing={0}>
          <Grid item lg={12} xl={5.5}>
            <div className="item-1">
              How Leve Havet is saving the planet by saving the corals.
            </div>
            <div className="date-box">April 2018</div>
          </Grid>
          <Grid item lg={12} xl={3.5}>
            <div className="item-2">
              <p>
                Lorem ipsum dolor sit amet, sed ea solum movet scriptorem, eos
                dolore evertitur ei, ferri omnium sea at. Harum accusam
                suscipiantur in pri, constituto appellantur consequuntur ei his.
              </p>
              <p>
                Pro at mollis aliquid civibus. Dicam ornatus ex duo, duo te
                aeque bonorum. Harum accusam suscipiantur in pri, constituto
                appellantur consequuntur ei his. Harum accusam suscipiantur in
                pri, constituto appellantur consequuntur ei his.
              </p>
            </div>
          </Grid>
          <Grid item lg={12} xl={3}>
            <div className="item-2">
              <p>
                Lorem ipsum dolor sit amet, sed ea solum movet scriptorem, eos
                dolore evertitur ei, ferri omnium sea at. Harum accusam
                suscipiantur in pri, constituto appellantur consequuntur ei his.
                Pro at mollis aliquid civibus. Dicam ornatus ex duo, duo te
                aeque bonorum. Harum accusam suscipiantur in pri, constituto
                appellantur consequuntur ei his. Harum accusam suscipiantur in
                pri, constituto appellantur consequuntur ei his.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Article;
