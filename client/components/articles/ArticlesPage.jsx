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
          <Grid className={"new-filter"} item>
            New
          </Grid>
          <Grid className={"popular-filter"} item>
            Popular
          </Grid>
          <Grid className={"water-filter"} item>
            Water
          </Grid>
          <Grid className={"knowledge-filter"} item>
            Knowledge
          </Grid>
        </Grid>
      </div>

      <div className="articles-top-section">
        <Grid container columnSpacing={{ xl: 4 }} rowSpacing={{ md: 4, lg: 4 }}>
          <Grid item md={12} lg={12} xl={6}>
            <div className="container-big">
              <div className={"container-content-big"}>
                <div className={"npo-text-big"}>{articleList[0].npoName}</div>
                <Link href={"/article?id=" + articleList[0]._id}>
                  <img src={articleList[0].image} id={"bilde"} alt={"das"} />
                </Link>
                <div className={"card-content-container"}>
                  <div className={"date-text-big"}>
                    <span className={"card-content-date"}>
                      {articleList[0].date}
                    </span>
                  </div>

                  <div className={"content-text-big"}>
                    <span className={"card-content-text"}>
                      {articleList[0].description}
                    </span>
                  </div>
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
                <div className={"container-content-medium"}>
                  <div className={"npo-text-medium"}>
                    {articleList[1].npoName}
                  </div>
                  <img src={articleList[1].image} alt={"das"} />
                  <div className={"card-content-container-medium"}>
                    <div className={"date-text-medium"}>
                      <span className={"card-content-date"}>
                        {articleList[1].date}
                      </span>
                    </div>
                    <div className={"content-text-medium"}>
                      <span className={"card-content-text"}>
                        {articleList[1].description}
                      </span>
                    </div>
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
                  <div className={"container-content-small"}>
                    <div className={"npo-text-small"}>
                      {articleList[2].npoName}
                    </div>
                    <img src={articleList[2].image} alt={"das"} />
                    <div className={"card-content-container-small"}>
                      <div className={"date-text-small"}>
                        <span className={"card-content-date"}>
                          {articleList[2].date}
                        </span>
                      </div>
                      <div className={"content-text-small"}>
                        <span className={"card-content-text-small"}>
                          {articleList[2].description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={6} xl={6}>
                <div className="container-small">
                  <div className={"container-content-small"}>
                    <div className={"npo-text-small"}>
                      {articleList[3].npoName}
                    </div>
                    <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                    <div className={"card-content-container-small"}>
                      <div className={"date-text-small"}>
                        <span className={"card-content-date"}>
                          {articleList[3].date}
                        </span>
                      </div>
                      <div className={"content-text-small"}>
                        <span className={"card-content-text-small"}>
                          {articleList[3].description}
                        </span>
                      </div>
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
        <Grid
          container
          columnSpacing={{ md: 4, lg: 4, xl: 4 }}
          rowSpacing={{ md: 4, lg: 4 }}
        >
          <Grid item lg={12} xl={6}>
            <div className="container-medium">
              <div className={"container-content-medium"}>
                <div className={"npo-text-medium"}>
                  {articleList[1].npoName}
                </div>
                <img src={articleList[1].image} alt={"das"} />
                <div className={"card-content-container-medium"}>
                  <div className={"date-text-medium"}>
                    <span className={"card-content-date"}>
                      {articleList[1].date}
                    </span>
                  </div>
                  <div className={"content-text-medium"}>
                    <span className={"card-content-text"}>
                      {articleList[1].description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={6} lg={6} xl={3}>
            <div className="container-small">
              <div className={"container-content-small"}>
                <div className={"npo-text-small"}>{articleList[3].npoName}</div>
                <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                <div className={"card-content-container-small"}>
                  <div className={"date-text-small"}>
                    <span className={"card-content-date"}>
                      {articleList[3].date}
                    </span>
                  </div>
                  <div className={"content-text-small"}>
                    <span className={"card-content-text-small"}>
                      {articleList[3].description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item md={6} lg={6} xl={3}>
            <div className="container-small">
              <div className={"container-content-small"}>
                <div className={"npo-text-small"}>{articleList[3].npoName}</div>
                <img src={articleList[3].image} id={"bilde"} alt={"das"} />
                <div className={"card-content-container-small"}>
                  <div className={"date-text-small"}>
                    <span className={"card-content-date"}>
                      {articleList[3].date}
                    </span>
                  </div>
                  <div className={"content-text-small"}>
                    <span className={"card-content-text-small"}>
                      {articleList[3].description}
                    </span>
                  </div>
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
