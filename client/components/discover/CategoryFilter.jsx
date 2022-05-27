import {
  Button,
  ButtonGroup,
  Grid,
  ToggleButton,
  Typography,
} from "@mui/material";
import MyNonProfitsIcon from "../../media/my_npo_icon.png";
import SchoolIcon from "@mui/icons-material/School";
import OpacityIcon from "@mui/icons-material/Opacity";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { useState } from "react";
import {
  highlightedNavButtonStyle,
  navButtonStyle,
} from "../../styles/button-style-config";

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
              selectedButton === "water"
                ? highlightedNavButtonStyle
                : navButtonStyle
            }
            onClick={() => categoryOnClickHandler("water")}
            value={"water"}
            variant="contained"
            startIcon={<OpacityIcon />}
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
            startIcon={<SchoolIcon />}
          >
            Knowledge
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={
              selectedButton === "" ? highlightedNavButtonStyle : navButtonStyle
            }
            onClick={() => categoryOnClickHandler("")}
            value={""}
            variant="contained"
            startIcon={<FilterAltOffIcon />}
          >
            All
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
