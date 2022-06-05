import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import zIndex from "@mui/material/styles/zIndex";

export function PartnerCard(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/npo-profile/" + props.partner._id);
      }}
      className={"partner-card"}
    >
      <img src={props.partner.card_image} alt="ball" />
      <div className="partner-card-content-container">
        <div className={"card-headline-container"}>
          <h1>{props.partner.name}</h1>
        </div>
        <p>{props.partner.description}</p>
        <div className={"partner-card-button-container"}>
          {/*TODO: make button component, big and ugly code *2*/}

          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/templates");
            }}
            sx={{
              zIndex: 2,
              mx: "10px",
              width: "140px",
              height: "45px",
              textTransform: "none",
              borderRadius: "10px",
              color: "#464D51",
              borderColor: "#637381",
              "&:hover": {
                borderColor: "#B8F0DA",
                backgroundColor: "#B8F0DA",
                color: "#000",
              },
            }}
          >
            Create template
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/npo-profile/" + props.partner._id);
            }}
            variant="contained"
            sx={{
              mx: "10px",
              width: "140px",
              height: "45px",
              textTransform: "none",
              borderRadius: "10px",
              backgroundColor: "#551477",
              "&:hover": {
                backgroundColor: "#7209B7",
              },
            }}
          >
            Read more
          </Button>
        </div>
        <div className={"category-tag"}>
          <div className="category-tag-text">
            <p>{props.partner.category}</p>
          </div>
          <div className={"card-icon-container"}>
            {props.partner.category.toLowerCase() === "water" ? (
              <FontAwesomeIcon icon={faDroplet} />
            ) : (
              <FontAwesomeIcon icon={faGraduationCap} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
