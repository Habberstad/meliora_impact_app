import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
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
      || npo.npoName.toLowerCase().includes(searchWord.toLowerCase())
    );
  } else {
    return list;
  }
}


export function NpoCard({ npo: { name, description, category, npoName } }) {

  return (

    <Card className={"npoCardStyle"} sx={{ borderRadius: "25px" }}>
      <div className={"card-image-wrapper"}>
        <CardMedia
          component="img"
          image={waterImg}
          alt="background-img"
          className={"card-image"}
        />
        <Typography variant={"string"}>
          <div className={"npoCardIcon card-image-icon"}>
            {npoName}
            <span className={"npo-space"}></span>
            {category.toLowerCase() === "water" ? <OpacityIcon/> : <SchoolIcon/> }

          </div>
        </Typography>
      </div>

      <div className={"npoCard-text-container"}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <hr className={"npoHr"} />
        <br />
        <Typography variant={"string"}>
          {description}
        </Typography>
      </div>
      <CardActions className={"card-button-container"}>
        <Button className={"card-button"} variant="contained">Les mer</Button>
      </CardActions>

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
          className={"card-container"}
        >

          {filteredList.map((npo) => (
            <Grid key={npo.id} item className={"card-item"}>
              <NpoCard npo={npo} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

