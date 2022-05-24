import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import waterIcon from "../../media/water_drop_icon.png";
import { useHref } from "react-router";

export function PartnerCard(props) {
  return (
    <Grid item xs={12}>
      <div className={"partner-card"}>
        <img src={props.partner.imgage} alt="ball" />
        <div className="partner-card-content-container">
          <div className={"card-headline-container"}>
            <h1>{props.partner.name}</h1>
          </div>
          <p>{props.partner.description}</p>
          <div className={"partner-card-button-container"}>
            {/*TODO: make button component, big and ugly code *2*/}
            <Button
              onClick={ () =>{location.href="/npo-profile/" + props.partner._id}}
              variant="contained"
              sx={{
                mx: "10px",
                width: "130px",
                height: "35px",
                textTransform: "none",
                borderRadius: "10px",
                backgroundColor: "#7209B7",
                "&:hover": {
                  backgroundColor: "#8d28ce",
                },
              }}
            >
              Les mer
            </Button>
            <Button
              variant="outlined"
              sx={{
                mx: "10px",
                width: "130px",
                height: "35px",
                textTransform: "none",
                borderRadius: "10px",
                color: "#464D51",
                borderColor: "#637381",
                "&:hover": {
                  borderColor: "#000",
                  backgroundColor: "#FFF",
                  color: "#637381",
                },
              }}
            >
              Lag templates
            </Button>
          </div>
          <div className={"category-tag"}>
            <div className="category-tag-text">
              <p>{props.partner.category}</p>
            </div>
            <div className={"card-icon-container"}>
              <img src={waterIcon} alt={waterIcon} />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
