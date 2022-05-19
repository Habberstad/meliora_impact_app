import { articles } from "../../mock_data/articles";
import logo from "../../media/article_header.png";
import logo2 from "../../media/article_header.png";
import { Grid, Link } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import "../../styles/articlesPage.css";
import { ArticleApiContext } from "../../api-client/articles";
import { useLoading } from "../../useLoading";

const ArticlesPage = () => {
  const [category, setCategory] = useState("");
  const [npoName, setNpoName] = useState("")

  const {getArticles} = useContext(ArticleApiContext)
  const { loading, error, data } = useLoading(
    async () => await getArticles({category, npoName}),
    [category]
  );


  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );


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
                <div className={"npoTextBig"}>{data[0].npoName}</div>
                <Link href={"/articles/article?id=" + data[0]._id}>
                  <img src={data[0].image} id={"bilde"} alt={"das"} />
                </Link>
                <div className={"dateTextBig"}>{data[0].date}</div>
                <div className={"contentTextBig"}>
                  {data[0].description}
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
                    {data[1].npoName}
                  </div>
                  <img src={data[1].image} alt={"das"} />
                  <div className={"dateTextMedium"}>{data[1].date}</div>
                  <div className={"contentTextMedium"}>
                    {data[1].description}
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
                      {data[2].npoName}
                    </div>
                    <img src={data[2].image} alt={"das"} />
                    <div className={"dateTextSmall"}>{data[2].date}</div>
                    <div className={"contentTextSmall"}>
                      {data[2].description}
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={6} xl={6}>
                <div className="container-small">
                  <div className={"containerContentSmall"}>
                    <div className={"npoTextSmall"}>
                      {data[3].npoName}
                    </div>
                    <img src={data[3].image} id={"bilde"} alt={"das"} />
                    <div className={"dateTextSmall"}>{data[3].date}</div>
                    <div className={"contentTextSmall"}>
                      {data[3].description}
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
                <div className={"npoTextMedium"}>{data[1].npoName}</div>
                <img src={data[1].image} alt={"das"} />
                <div className={"dateTextMedium"}>{data[1].date}</div>
                <div className={"contentTextMedium"}>
                  {data[1].description}
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} xl={3}>
            <div className="container-small">
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{data[3].npoName}</div>
                <img src={data[3].image} id={"bilde"} alt={"das"} />
                <div className={"dateTextSmall"}>{data[3].date}</div>
                <div className={"contentTextSmall"}>
                  {data[3].description}
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} xl={3}>
            <div className="container-small">
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{data[3].npoName}</div>
                <img src={data[3].image} id={"bilde"} alt={"das"} />
                <div className={"dateTextSmall"}>{data[3].date}</div>
                <div className={"contentTextSmall"}>
                  {data[3].description}
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
