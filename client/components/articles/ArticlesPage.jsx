import { articles } from "../../mock_data/articles";
import logo from "../../media/article_header.png";
import logo2 from "../../media/article_header.png";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "../../styles/articlesPage.css";
import { getArticles } from "../../api-client/articles";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

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

      <div className={"filterContainer"}>
        <Grid container="column" justifyContent={"center"}>
          <Grid container direction="row" spacing={3} justifyContent="center">
            <Grid className={"newFilter"} item>
              <a onClick={""}>New</a>
            </Grid>
            <Grid className={"popularFilter"} item>
              <a onClick={"popular"}>Popular</a>
            </Grid>
            <Grid className={"waterFilter"} item>
              <a onClick={"water"}>Water</a>
            </Grid>
            <Grid className={"knowledgeFilter"} item>
              <a className={"knowledgeFilterA"}>Knowledge</a>
            </Grid>
          </Grid>
          <Grid item>
            <div className={"underbar"}></div>
          </Grid>
        </Grid>
      </div>

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
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
      >
        <Grid item xs={5}>
          <div className={"bigCheckoutContainer"}>
            <img
              width={"100%"}
              height={"100%"}
              src={articleList[0].image}
              alt={"adas"}
            />
            <div className={"npoTextSmall"}>{articleList[2].npoName}</div>
            <div className={"bigDateRecommended"}>{articleList[0].date}</div>
            <div className={"bigDescriptionRecommended"}>
              {articleList[0].description}
            </div>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={"smallCheckoutContainer"}>
            <img
              width={"100%"}
              height={"100%"}
              src={articleList[2].image}
              alt={"dasd"}
            />
            <div className={"npoTextSmall"}>{articleList[2].npoName}</div>
            <div>
              <div className={"smallDateRecommended"}>
                {articleList[2].date}
              </div>
            </div>
            <div className={"smallDescriptionRecommended"}>
              {articleList[2].description}
            </div>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={"smallCheckoutContainer"}>
            <img
              width={"100%"}
              height={"100%"}
              src={articleList[2].image}
              alt={"das"}
            />
            <div className={"npoTextSmall"}>{articleList[2].npoName}</div>
            <div className={"smallDateRecommended"}>{articleList[2].date}</div>
            <div className={"smallDescriptionRecommended"}>
              {articleList[2].description}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesPage;
