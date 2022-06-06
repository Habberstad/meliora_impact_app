import { Button, Card, CardMedia, Divider, Grid } from "@mui/material";

import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
      onClick={() => {
        navigate("/npo-profile/" + _id);
      }}
      className={"npoCardStyle"}
      sx={{
        borderRadius: "10px",
        boxShadow:
          "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "rgba(148, 157, 176, 0.01)",
        },
      }}
    >
      <div className={"card-image-wrapper"}>
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
              <FontAwesomeIcon icon={faDroplet} style={{ height: "15px" }} />
            ) : (
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ height: "15px" }}
              />
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
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/npo-profile/" + _id);
          }}
          variant="contained"
          sx={{
            width: "100px",
            height: "35px",
            borderRadius: "10px",
            backgroundColor: "#551477",
            fontSize: "12px",
            boxShadow:
              "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
            fontWeight: "400",
            "&:hover": {
              backgroundColor: "#7209B7",
              boxShadow:
                "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
            },
          }}
        >
          Explore
        </Button>
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
        <Grid container columns={3} spacing={2} className={"card-container"}>
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
