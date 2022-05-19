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
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  const handleNavigationState = (tabValue) => {
    setSelectedTab(tabValue);
  };

  function categoryOnClickHandler(selectedCategory) {
    setSelectedButton(selectedCategory);
    handleNavigationState(selectedCategory);
    props.onClick(selectedCategory);
  }

  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button
            onClick={() => categoryOnClickHandler("water")}
            color="inherit"
            value={"water"}
            variant="contained"
            sx={
              selectedTab === "water"
                ? highlightedNavButtonStyle
                : navButtonStyle
            }
            startIcon={<OpacityIcon />}
          >
            Water
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => categoryOnClickHandler("knowledge")}
            color="inherit"
            value={"knowledge"}
            variant="contained"
            sx={
              selectedTab === "knowledge"
                ? highlightedNavButtonStyle
                : navButtonStyle
            }
            startIcon={<SchoolIcon />}
          >
            Knowledge
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => categoryOnClickHandler("")}
            color="inherit"
            value={""}
            variant="contained"
            sx={selectedTab === "" ? highlightedNavButtonStyle : navButtonStyle}
            startIcon={<FilterAltOffIcon />}
          >
            All
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
