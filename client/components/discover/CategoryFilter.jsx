import { Button, ButtonGroup } from "@mui/material";

export function CategoryFilter(props) {
  return <div>
    <label>Filter by category: </label>
    <ButtonGroup value={"4"} variant="contained" aria-label="outlined primary button group"
                 onClick={props.onClick}>
      <Button value={""} variant="contained">All</Button>
      <Button value={"water"} variant="contained">Water</Button>
      <Button value={"education"} variant="contained">Education</Button>
      <Button value={"ocean"} variant="contained">Ocean</Button>
      <Button value={"health"} variant="contained">Health</Button>
    </ButtonGroup>
  </div>;
}