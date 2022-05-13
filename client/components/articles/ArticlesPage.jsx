import { articles } from "../../mock_data/articles";
import logo from "../../media/article_header.png";
import logo2 from "../../media/article_header.png";
import { Grid } from "@mui/material";
import { useState } from "react";

const ArticlesPage = () => {
  const [articleList, setArticleList] = useState(articles);

  return (
    <div>
      <h1>Meliora Articlels</h1>

      <Grid container direction="row" spacing={1} justifyContent="center">
        <Grid item>New</Grid>
        <Grid item>Popular</Grid>
        <Grid item>Water</Grid>
        <Grid item>Knowledge</Grid>
      </Grid>

      <div id={"articles-container"}>
        <Grid
          container
          direction={"row"}
          spacing={2}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          marginLeft={"10px"}
          marginRight={"10px"}
        >
          <Grid item container xs={6}>
            <div className={"containerContent"}>
              <img
                src={articleList[0].image}
                height={"100%"}
                id={"bilde"}
                alt={"das"}
              />
              <div className={"contentTextBig"}>{articleList[0].content1}</div>
              <div className={"contentTText"}>
                {articleList[0].publishingDate}
              </div>
              <div className={"contentTText"}>{articleList[0].npoName}</div>
            </div>
          </Grid>

          <Grid item container xs={6} spacing={2}>
            <Grid item xs={12}>
              <div className={"containerContent"}>
                <img src={articleList[1].image} id={"bilde"} alt={"das"} />
                <div className={"contentTextMedium"}>
                  {articleList[1].content1}
                </div>
                <div className={"cardContentText"}>
                  {articleList[1].publishingDate}
                </div>
                <div className={"cardContentText"}>
                  {articleList[1].npoName}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={"containerContent"}>
                <img src={articleList[2].image} id={"bilde"} alt={"das"} />
                <div className={"contentTextSmall"}>
                  {articleList[2].content1}
                </div>
                <div className={"cardContentText"}>
                  {articleList[2].publishingDate}
                </div>
                <div className={"cardContentText"}>
                  {articleList[2].npoName}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={"containerContent"}>
                <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                <div className={"contentTextSmall"}>
                  {articleList[3].content1}
                </div>
                <div className={"cardContentText"}>
                  {articleList[3].publishingDate}
                </div>
                <div className={"cardContentText"}>
                  {articleList[3].npoName}
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h1>Articles You Should Check Out</h1>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0.5}
      >
        <Grid item xs={5}>
          <img width={"100%"} height={"100%"} src={logo} />
          <a>11. December 2021</a>
          <a>
            We’ve started our work in Burkina Faso. With your help we can
            provide clean water to several villages
          </a>
        </Grid>

        <Grid item xs={3}>
          <img width={"100%"} src={logo2} />
          <a>11. December 2021</a>
          <a>
            A village in Peru has now access to clean water. We thank our
            amazing voulenteers
          </a>
        </Grid>

        <Grid item xs={3}>
          <img width={"100%"} src={logo2} />
          <a>
            We’re happy to say that our voluenteers have arrived in Peru.
            Exciting times!
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesPage;
