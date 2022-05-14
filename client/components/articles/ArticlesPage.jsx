import { articles } from "../../mock_data/articles";
import logo from "../../media/article_header.png";
import logo2 from "../../media/article_header.png";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "../../styles/articlesPage.css";
import { getArticles } from "../../api-client/articles";

const ArticlesPage = () => {
  const [articleList, setArticleList] = useState(articles);
  const [articlesMongoDb, setArticlesMongoDb] = useState();

  useEffect(() => {
    async function loadArticleList() {
      try {
        const res = await getArticles();
        setArticlesMongoDb(res?.data?.data);
      } catch (err) {
        console.error(err);
      }
    }
    loadArticleList();
    console.log(articlesMongoDb);
  }, []);

  return (
    <div>
      <h1>Meliora Articles</h1>

      <Grid container direction="row" spacing={1} justifyContent="center">
        <Grid item>New</Grid>
        <Grid item>Popular</Grid>
        <Grid item>Water</Grid>
        <Grid item>Knowledge</Grid>
      </Grid>

      <div id={"articles-container"}>
        <Grid container direction={"row"}>
          <Grid
            item
            container
            xs={6}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <div className={"containerContentBig"}>
              <div className={"npoTextBig"}>{articleList[0].npoName}</div>
              <img src={articleList[0].image} id={"bilde"} alt={"das"} />
              <div className={"dateTextBig"}>{articleList[0].date}</div>
              <div className={"contentTextBig"}>
                {articleList[0].description}
              </div>
            </div>
          </Grid>

          <Grid
            item
            container
            xs={6}
            alignContent={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Grid
              item
              xs={10}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <div className={"containerContentMedium"}>
                <div className={"npoTextMedium"}>{articleList[1].npoName}</div>
                <img src={articleList[1].image} alt={"das"} />
                <div className={"dateTextMedium"}>{articleList[1].date}</div>
                <div className={"contentTextMedium"}>
                  {articleList[1].description}
                </div>
              </div>
            </Grid>

            <Grid item xs={5} alignContent={"center"} justifyContent={"center"}>
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{articleList[2].npoName}</div>
                <img src={articleList[2].image} alt={"das"} />
                <div className={"dateTextSmall"}>{articleList[2].date}</div>
                <div className={"contentTextSmall"}>
                  {articleList[2].description}
                </div>
              </div>
            </Grid>

            <Grid item xs={5}>
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{articleList[3].npoName}</div>
                <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                <div className={"dateTextSmall"}>{articleList[3].date}</div>
                <div className={"contentTextSmall"}>
                  {articleList[3].description}
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
          <img width={"100%"} height={"100%"} src={articleList[0].image} />
          <div>{articleList[0].date}</div>
          <div>{articleList[0].description}</div>
        </Grid>

        <Grid item xs={3}>
          <img width={"100%"} height={"100%"} src={articleList[2].image} />
          <div>{articleList[2].date}</div>
          <div>{articleList[2].description}</div>
        </Grid>

        <Grid item xs={3}>
          <img
            width={"100%"}
            height={"100%"}
            src={articleList[2].image}
            alt={"das"}
          />
          <div>{articleList[2].date}</div>
          <div>{articleList[2].description}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesPage;
