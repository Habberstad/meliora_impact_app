import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import MyNonProfitsIcon from "../../media/my_npo_icon.png";
import { Grid3x3 } from "@mui/icons-material";

export function CategoryFilter(props) {
  return <div>
      <Grid container spacing={2} justify="center"   >
        <Grid item>
          <Button color="inherit" value={""} variant="contained">
            All
          </Button>
        </Grid>
        <Grid item>
          <Button color="inherit" value={"water"} variant="contained">
            <img
              src={MyNonProfitsIcon}
              alt="icon-img"
            />
            Water
          </Button>
        </Grid>
        <Grid item>
          <Button color="inherit" value={"knowledge"} variant="contained">
            <img
              src={MyNonProfitsIcon}
              alt="icon-img"
            />
            Knowledge
          </Button>
        </Grid>
      </Grid>
  </div>;
}