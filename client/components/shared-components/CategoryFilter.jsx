import { Button, Grid } from "@mui/material";
import {
  highlightedNavButtonStyle,
  navButtonStyle,
} from "../../styles/button-style-config";
import { TableRows } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export function CategoryFilter(props) {
  const selectedButton = props.category;

  function categoryOnClickHandler(selectedCategory) {
    props.onClick(selectedCategory);
  }

  return (
    <div>
      <Grid container columnSpacing={{ lg: 3, xl: 3 }} justifyContent="center">
        <Grid item>
          <Button
            sx={
              selectedButton === "" ? highlightedNavButtonStyle : navButtonStyle
            }
            onClick={() => categoryOnClickHandler("")}
            value={""}
            variant="contained"
            startIcon={<TableRows />}
          >
            All
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={
              selectedButton === "water"
                ? highlightedNavButtonStyle
                : navButtonStyle
            }
            onClick={() => categoryOnClickHandler("water")}
            value={"water"}
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faDroplet} />}
          >
            Water
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={
              selectedButton === "knowledge"
                ? highlightedNavButtonStyle
                : navButtonStyle
            }
            onClick={() => categoryOnClickHandler("knowledge")}
            value={"knowledge"}
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            Knowledge
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
