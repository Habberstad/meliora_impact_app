import { articles } from "../../mock_data/articles";
import logo from "../../media/article_header.png";
import logo2 from "../../media/article_header.png";
import { Grid, Link } from "@mui/material";
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
  const [data1, setData1] = useState(articlesMongoDb);
  console.log(data1);

  return (
    <div className="articles-wrapper">
      <div className="top-header">
        Meliora <br></br> Articles
      </div>

      <div className="articles-sorter">
        <Grid container spacing={6} justifyContent="center">
          <Grid className={"newFilter"} item>
            New
          </Grid>
          <Grid className={"popularFilter"} item>
            Popular
          </Grid>
          <Grid className={"waterFilter"} item>
            Water
          </Grid>
          <Grid className={"knowledgeFilter"} item>
            Knowledge
          </Grid>
        </Grid>
      </div>

      <div className="articles-top-section">
        <Grid container columnSpacing={{ xl: 4 }} rowSpacing={{ md: 4, lg: 4 }}>
          <Grid item md={12} lg={12} xl={6}>
            <div className="container-big">
              <div className={"containerContentBig"}>
                <div className={"npoTextBig"}>{articleList[0].npoName}</div>
                <Link href={"/article?id=" + articleList[0]._id}>
                  <img src={articleList[0].image} id={"bilde"} alt={"das"} />
                </Link>
                <div className={"dateTextBig"}>{articleList[0].date}</div>
                <div className={"contentTextBig"}>
                  {articleList[0].description}
                </div>
              </div>
            </div>
          </Grid>

          <Grid
            container
            item
            lg={12}
            xl={6}
            rowSpacing={{ md: 4, lg: 4, xl: 4 }}
          >
            <Grid item md={12} lg={12} xl={12}>
              <div className="container-medium">
                <div className={"containerContentMedium"}>
                  <div className={"npoTextMedium"}>
                    {articleList[1].npoName}
                  </div>
                  <img src={articleList[1].image} alt={"das"} />
                  <div className={"dateTextMedium"}>{articleList[1].date}</div>
                  <div className={"contentTextMedium"}>
                    {articleList[1].description}
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              container
              item
              rowSpacing={{ xl: 4 }}
              columnSpacing={{ xl: 4, lg: 4, md: 4 }}
            >
              <Grid item md={6} lg={6} xl={6}>
                <div className="container-small">
                  <div className={"containerContentSmall"}>
                    <div className={"npoTextSmall"}>
                      {articleList[2].npoName}
                    </div>
                    <img src={articleList[2].image} alt={"das"} />
                    <div className={"dateTextSmall"}>{articleList[2].date}</div>
                    <div className={"contentTextSmall"}>
                      {articleList[2].description}
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={6} xl={6}>
                <div className="container-small">
                  <div className={"containerContentSmall"}>
                    <div className={"npoTextSmall"}>
                      {articleList[3].npoName}
                    </div>
                    <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                    <div className={"dateTextSmall"}>{articleList[3].date}</div>
                    <div className={"contentTextSmall"}>
                      {articleList[3].description}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="articles-bottom-section">
        <div className="bottom-header">Articles You Should Check Out</div>
        <Grid container columnSpacing={{ lg: 4, xl: 4 }} rowSpacing={{ lg: 4 }}>
          <Grid item lg={12} xl={6}>
            <div className="container-medium">
              <div className={"containerContentMedium"}>
                <div className={"npoTextMedium"}>{articleList[1].npoName}</div>
                <img src={articleList[1].image} alt={"das"} />
                <div className={"dateTextMedium"}>{articleList[1].date}</div>
                <div className={"contentTextMedium"}>
                  {articleList[1].description}
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} xl={3}>
            <div className="container-small">
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{articleList[3].npoName}</div>
                <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                <div className={"dateTextSmall"}>{articleList[3].date}</div>
                <div className={"contentTextSmall"}>
                  {articleList[3].description}
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} xl={3}>
            <div className="container-small">
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{articleList[3].npoName}</div>
                <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                <div className={"dateTextSmall"}>{articleList[3].date}</div>
                <div className={"contentTextSmall"}>
                  {articleList[3].description}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ArticlesPage;
