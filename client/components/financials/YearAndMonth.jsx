import { MenuItem, Select } from "@mui/material";
import * as React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export function YearAndMonth(props) {
  return (
    <>
      <Select
        defaultValue={"2022"}
        onChange={props.onChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          borderRadius: "8px",
          width: "100px",
          height: "35px",
        }}
      >
        <MenuItem value={2022}>2022</MenuItem>
        <MenuItem value={2021}>2021</MenuItem>
        <MenuItem value={2020}>2020</MenuItem>
      </Select>
      <Select
        id={"month"}
        defaultValue={"Juni"}
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          borderRadius: "8px",
          width: "100px",
          height: "35px",
        }}
      >
        {props.strings.map(props.callbackfn)}
      </Select>
      <div className={"accounting-icon-calender-wrapper"}>
        <CalendarMonthIcon fontSize={"large"} />
      </div>
    </>
  );
}
