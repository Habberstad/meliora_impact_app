import { articles } from "../../mock_data/articles";
import logo from "../../media/article_header.png";
import logo2 from "../../media/article_header.png";
import { Grid } from "@mui/material";
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
              <div className={"npoTextBig"}>{data[0].npoName}</div>
              <img src={data[0].image} id={"bilde"} alt={"das"} />
              <div className={"dateTextBig"}>{data[0].date}</div>
              <div className={"contentTextBig"}>
                {data[0].description}
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
                <div className={"npoTextMedium"}>{data[1].npoName}</div>
                <img src={data[1].image} alt={"das"} />
                <div className={"dateTextMedium"}>{data[1].date}</div>
                <div className={"contentTextMedium"}>
                  {data[1].description}
                </div>
              </div>
            </Grid>

            <Grid item xs={5} alignContent={"center"} justifyContent={"center"}>
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{data[2].npoName}</div>
                <img src={data[2].image} alt={"das"} />
                <div className={"dateTextSmall"}>{data[2].date}</div>
                <div className={"contentTextSmall"}>
                  {data[2].description}
                </div>
              </div>
            </Grid>

            <Grid item xs={5}>
              <div className={"containerContentSmall"}>
                <div className={"npoTextSmall"}>{data[3].npoName}</div>
                <img src={data[3].image} id={"bilde"} alt={"das"} />
                <div className={"dateTextSmall"}>{data[3].date}</div>
                <div className={"contentTextSmall"}>
                  {data[3].description}
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
          <img width={"100%"} height={"100%"} src={data[0].image} />
          <div>{data[0].date}</div>
          <div>{data[0].description}</div>
        </Grid>

        <Grid item xs={3}>
          <img width={"100%"} height={"100%"} src={data[2].image} />
          <div>{data[2].date}</div>
          <div>{data[2].description}</div>
        </Grid>

        <Grid item xs={3}>
          <img
            width={"100%"}
            height={"100%"}
            src={data[2].image}
            alt={"das"}
          />
          <div>{data[2].date}</div>
          <div>{data[2].description}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticlesPage;
