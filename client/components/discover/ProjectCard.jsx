import { useNavigate } from "react-router";
import { Button, Card, CardMedia, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { exploreButtonB21 } from "../../styles/button-style-config";

export function ProjectCard({
  project: { name, description, category, _id, card_image },
}) {
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
          sx={exploreButtonB21}
        >
          Explore
        </Button>
      </div>
    </Card>
  );
}
