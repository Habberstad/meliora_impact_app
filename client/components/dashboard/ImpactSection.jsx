import * as React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ImpactSection(props) {
  const [counter, setCounter] = useState(1);
  const impact = props.data.active_subscriptions[0].impacts;

  const increase = () => {
    if (counter === impact.length - 1) {
      setCounter(0);
    } else {
      setCounter(+1);
    }
  };

  const decrease = () => {
    if (counter === 0) {
      setCounter(impact.length - 1);
    }
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return <Grid lg={3} xl={3} item>
    <div className="students-impact-container">
      <div className="students-impact-icon">
        <SchoolIcon fontSize={"large"} />
      </div>
      <ArrowBackIosIcon
        onClick={decrease}
        className={"student-back-button"}
      />
      <ArrowForwardIosIcon
        onClick={increase}
        className={"students-forward-button"}
      />
      <div className="students-impact-count">
        {props.impact === undefined ? (
          <div>impact not set</div>
        ) : (
          <div>{props.impact[props.counter].amount}</div>
        )}
      </div>
      <div className="students-impact-content">
        {props.impact === undefined ? (
          <div>impact not set</div>
        ) : (
          <div>{props.impact[props.counter].impact_type}</div>
        )}
      </div>
    </div>
  </Grid>;
}