import "../../global-styles.css";
import { npos } from "../../data/npos";
import { useState } from "react";
import { Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import waterImg from "../discover/water.png";


function KeywordFilter(props) {
  return (
    <div>
      <label>Search: </label>
      <input type={"text"} onChange={props.onChange} />
    </div>
  );
}

const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(npos);

  function onclickHandler(event) {
    setCategoryFilter(event.target.value);
  }

  function FilterNpoByCategory() {
    if (categoryFilter === "") {
      return data;
    } else {
      return data.filter(npo => npo.category === categoryFilter);
    }
  }


  function ListNpo() {
    let testList = FilterNpoByCategory();

    if (searchString !== "") {
      testList = testList.filter((npo) =>
        npo.name.toLowerCase().includes(searchString.toLowerCase())
        || npo.description.toLowerCase().includes(searchString.toLowerCase())
        || npo.category.toLowerCase().includes(searchString.toLowerCase())
      );
    }


    return (
      <Grid container spacing={2}>
        {testList.map((npo) => (
          <NpoCard key={npo.id} npo={npo} />
        ))}
      </Grid>
    );
  }

  function NpoCard({ npo: { name, description, category } }) {
    return (
      <Grid item xs={3}>
        <Card>
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
                Description: {description}
              </Typography>
              <br />
              <br />
              <Typography variant={"string"}>
                (Category: {category})
              </Typography>
            </CardActionArea>
          </CardContent>

        </Card>
      </Grid>
    );
  }

  function handleSearchInput(event) {
    setSearchString(event.target.value);
  }

  return (
    <div>
      <div>
        <h3>Discover</h3>
        <p>Explore other projects</p>
        <br />
        <p><strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet scriptorem, eos dolore evertitur ei, ferri
          omnium sea at.</p>
      </div>

      <label>Filter by category: </label>
      <ButtonGroup value={"4"} variant="contained" aria-label="outlined primary button group"
                   onClick={onclickHandler.bind(this)}>
        <Button value={""} variant="contained">All</Button>
        <Button value={"water"} variant="contained">Water</Button>
        <Button value={"education"} variant="contained">Education</Button>
        <Button value={"ocean"} variant="contained">Ocean</Button>
        <Button value={"health"} variant="contained">Health</Button>
      </ButtonGroup>
      <br />
      <br />
      <KeywordFilter searchString={searchString} onChange={handleSearchInput} />
      <br />
      <br />
      <ListNpo />
    </div>
  );
};

export default DiscoverPage;
