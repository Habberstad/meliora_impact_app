import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia, Divider,
  Grid,
  Typography
} from "@mui/material";
import waterImg from "./water.png";
import SchoolIcon from "@mui/icons-material/School";
import OpacityIcon from "@mui/icons-material/Opacity";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import ArticlesIcon from "../../media/articles_icon.png";
import { Link } from "react-router-dom";

function filterBySearchWord(list, searchWord) {
  if (searchWord !== "") {
    return list.filter((project) =>
      project.name.toLowerCase().includes(searchWord.toLowerCase())
      || project.description.toLowerCase().includes(searchWord.toLowerCase())
      || project.category.toLowerCase().includes(searchWord.toLowerCase())
      || project.npoName.toLowerCase().includes(searchWord.toLowerCase())
    );
  } else {
    return list;
  }
}


export function ProjectCard({ project: { name, description, category, npoName, _id } }) {

  function navigateToProject() {
    alert("Should navigate to project: " + name + " (id: " + _id + ")");
  }

  return (

    <Card className={"npoCardStyle"} sx={{ borderRadius: "25px", boxShadow: 5 }}>
      <div className={"card-image-wrapper"}>
        <CardMedia
          component="img"
          image={waterImg}
          alt="background-img"
          className={"card-image"}
        />
        <div className={"npoCardIcon card-image-icon"}>
          <div className={"card-image-npoName-wrapper"}>
            {npoName}
          </div>
          <div className={"card-image-icon-wrapper"}>
            {category.toLowerCase() === "water" ? <OpacityIcon /> : <SchoolIcon />}
          </div>
        </div>
      </div>

      <div className={"npoCard-text-container"}>
        <h3 className={"npoCard-text-header"}>{name}</h3>
        <Divider variant="middle" className={"divider-1"} />
        <p className={"npoCard-text-description"}>{description}</p>
      </div>
      <CardActions className={"card-button-container"}>
        <Link to={"/project/" + _id} style={{ textDecoration: "none" }}>
          <Button className={"card-button"} variant="contained">Explore</Button>
        </Link>
      </CardActions>

    </Card>

  );
}

export function ListProjects(props) {
  const filteredList = filterBySearchWord(props.data, props.searchWord);

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

          {filteredList.map((project) => (
            <Grid key={project._id} item className={"card-item"}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

