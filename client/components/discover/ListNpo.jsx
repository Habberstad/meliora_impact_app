import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import waterImg from "./water.png";
import SchoolIcon from "@mui/icons-material/School";
import OpacityIcon from "@mui/icons-material/Opacity";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

function FilterNpoByCategory(list, category) {
  if (category === "") {
    return list;
  } else {
    return list.filter(npo => npo.category === category);
  }
}

function filterBySearchWord(list, searchWord) {
  if (searchWord !== "") {
    return list.filter((npo) =>
      npo.name.toLowerCase().includes(searchWord.toLowerCase())
      || npo.description.toLowerCase().includes(searchWord.toLowerCase())
      || npo.category.toLowerCase().includes(searchWord.toLowerCase())
    );
  } else {
    return list;
  }
}


export function NpoCard({ npo: { name, description, category } }) {
  return (

    <Card className={"npoCardStyle"} sx={{ borderRadius: "25px" }}>

      <CardActionArea>

        <CardMedia
          component="img"
          image={waterImg}
          alt="background-img"
        />
        <div className={"npoCard-text-container"}>
          <Grid container>

            <Grid item md={6}>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant={"string"}>
                <div className={"npoCardIcon"}>
                  <SchoolIcon/>
                  <span className={"npo-space"}></span>
                  {category}
                </div>

              </Typography>
            </Grid>

          </Grid>

          <br />
          <hr className={"npoHr"} />
          <br />
          <Typography variant={"string"}>
            {description}
          </Typography>
        </div>

      </CardActionArea>

    </Card>

  );
}

export function ListNpo(props) {
  let filteredList = FilterNpoByCategory(props.data, props.category);
  filteredList = filterBySearchWord(filteredList, props.searchWord);

  const numberOfMatches = filteredList.length;
  if (numberOfMatches === 0) {
    return <div>No match</div>;
  } else {
    return (
      <div>
        <div>(Search result: {numberOfMatches})</div>

        <Grid
          container
          columns={3}
          direction="row"
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >

          {filteredList.map((npo) => (
            <Grid key={npo.id} item>
              <NpoCard npo={npo} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

