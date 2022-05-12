import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import waterImg from "./water.png";

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
            <Grid key={npo.id} item xs={3} lg={2} xl={1}>
              <NpoCard  npo={npo} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

var npoCardStyle = {
  display: 'block',
  width: '300px',
  height: '400px'
}

export function NpoCard({ npo: { name, description, category } }) {
  return (

    <Card style={npoCardStyle}>
      <CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            image={waterImg}
            alt="background-img"
          />
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant={"string"}>
            {description}
          </Typography>
          <br />
          <br />
          <Typography variant={"string"}>
            (Category: {category})
          </Typography>
        </CardActionArea>
      </CardContent>

    </Card>

  );
}