import { Button, ButtonGroup } from "@mui/material";
import MyNonProfitsIcon from "../../media/my_npo_icon.png";

export function CategoryFilter(props) {
  return <div>
    <label>Filter by category: </label>
    <ButtonGroup variant="contained" aria-label="outlined primary button group"
                 onClick={props.onClick}>
      <Button color="inherit" value={""} variant="contained">
        All
      </Button>
      <Button color="inherit" value={"water"} variant="contained">
        <img
          src={MyNonProfitsIcon}
          alt="icon-img"
        />
        Water
      </Button>
      <Button color="inherit" value={"knowledge"} variant="contained">
        <img
          src={MyNonProfitsIcon}
          alt="icon-img"
        />
        Knowledge
      </Button>
    </ButtonGroup>
  </div>;
}