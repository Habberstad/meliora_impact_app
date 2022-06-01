import { Button, Card, CardMedia, Divider, Grid } from "@mui/material";
import waterImg from "../../media/water.png";
import SchoolIcon from "@mui/icons-material/School";
import OpacityIcon from "@mui/icons-material/Opacity";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function filterBySearchWord(list, searchWord) {
  if (searchWord !== "") {
    return list.filter(
      (project) =>
        project.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        project.description.toLowerCase().includes(searchWord.toLowerCase()) ||
        project.category.toLowerCase().includes(searchWord.toLowerCase())
    );
  } else {
    return list;
  }
}

export function ProjectCard({
  project: { name, description, category, _id, card_image },
}) {
  function navigateToProject() {
    alert("Should navigate to project: " + name + " (id: " + _id + ")");
  }

  const navigate = useNavigate();

  return (
    <Card
      className={"npoCardStyle"}
      sx={{
        borderRadius: "25px",
        boxShadow:
          "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "rgba(148, 157, 176, 0.01)",
        },
      }}
    >
      <div
        onClick={() => navigate("/npo-profile/" + _id)}
        className={"card-image-wrapper"}
      >
        <CardMedia
          component="img"
          image={card_image}
          alt="background-img"
          className={"card-image"}
          sx={{ width: "320px" }}
        />
        <div className={"npoCardIcon card-image-icon"}>
          <div className={"card-image-npoName-wrapper"}>{category}</div>
          <div className={"card-image-icon-wrapper"}>
            {category.toLowerCase() === "water" ? (
              <OpacityIcon sx={{ fontSize: "20px", marginTop: "2px" }} />
            ) : (
              <SchoolIcon sx={{ fontSize: "20px", marginTop: "2px" }} />
            )}
          </div>
        </div>
      </div>

      <div className={"npoCard-text-container"}>
        <div className={"npoCard-text-header"}>{name}</div>
        <Divider variant="middle" className={"divider-1"} />
        <div className={"npoCard-text-description"}>{description}</div>
      </div>
      <div className={"card-button-container"}>
        <Link to={"/npo-profile/" + _id} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              width: "107px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "#7209B7",
              fontSize: "12px",
              boxShadow:
                "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
              fontWeight: "400",
              "&:hover": {
                backgroundColor: "#8830c4",
                boxShadow:
                  "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
              },
            }}
          >
            Explore
          </Button>
        </Link>
      </div>
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
        <Grid
          container
          columns={3}
          spacing={2}
          className={"card-container"}
          justifyContent="center"
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
