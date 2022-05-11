import Grid from "@mui/material/Grid";

import logo from '../../media/article-header.png';
import logo2 from '../../media/article-header.png';
const ArticlesPage = () => {
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

    <div id={"test"}>
      <img src={logo}/>
      <a>11. December 2021</a>
      <a>We’ve started our work in Burkina Faso. With your help we can provide clean water to several villages</a>
    </div>

    <div id={"test"}>
      <img src={logo2}/>
      <a>11. December 2021</a>
      <a>We’ve started our work in Burkina Faso. With your help we can provide clean water to several villages</a>
    </div>

      <div id={"test"}>
      <img src={logo2}/>
        <a>11. December 2021</a>
      <a>A village in Peru has now access to clean </a>
    </div>

      <div id={"test"}>
      <img src={logo2}/>
        <a>11. December 2021</a>
      <a>We’re happy to say that our voluenteers have arrived in Peru. Exciting times!</a>
    </div>


    </div>
    <h1>Articles You Should Check Out</h1>
    <Grid container  direction="row" justifyContent="flex-start" alignItems="center" spacing={0.5}>

      <Grid item xs={5}>
        <img width={"100%"} height={"100%"} src={logo}/>
        <a>11. December 2021</a>
        <a>We’ve started our work in Burkina Faso. With your help we can provide clean water to several villages</a>
      </Grid>

      <Grid item xs={3}>
        <img width={"100%"} src={logo2}/>
        <a>11. December 2021</a>
        <a>A village in Peru has now access to clean water.
          We thank our amazing voulenteers</a>
      </Grid>

      <Grid item xs={3}>
        <img width={"100%"} src={logo2}/>
        <a>11. December 2021</a>
        <a>We’re happy to say that our voluenteers have arrived in Peru. Exciting times!</a>
      </Grid>


    </Grid>




  </div>
);
};

export default ArticlesPage;
