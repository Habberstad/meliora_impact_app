import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import MyNonProfitsIcon from "../../media/my_npo_icon.png";
import SchoolIcon from '@mui/icons-material/School';
import OpacityIcon from '@mui/icons-material/Opacity';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';


export function CategoryFilter(props) {
  function categoryOnClickHandler(selectedCategory) {
      props.onClick(selectedCategory)
  }

  return <div>
      <Grid container spacing={2} justify="center"   >
        <Grid item>
          <Button onClick={ () =>categoryOnClickHandler("water")} color="inherit" value={"water"} variant="contained" startIcon={<OpacityIcon onClick={ () =>categoryOnClickHandler("water")}/>}>
            Water
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={ () =>categoryOnClickHandler("knowledge")} color="inherit" value={"knowledge"} variant="contained" startIcon={<SchoolIcon onClick={ () =>categoryOnClickHandler("water")}/>}>
            Knowledge
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={ () =>categoryOnClickHandler("")} color="inherit" value={""} variant="contained" startIcon={<FilterAltOffIcon onClick={ () =>categoryOnClickHandler("")}/>}>
            All
          </Button>
        </Grid>
      </Grid>
  </div>;
}