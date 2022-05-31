import * as React from "react";
import { useState } from "react";
import { Grid, Link } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ImpactSection(props) {
  const [counter, setCounter] = useState(1);
  const impact = props.data.active_subscriptions[0].impacts;

  console.log("impact" + impact);
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

  return (
    <Grid lg={3} xl={3} item>
      <div className={"students-impact-container"}>
        <div className={"students-circle-icon-wrapper"}>
          <SchoolIcon className="students-school-icon" fontSize={"large"} />
        </div>
        <div className={"students-count-arrow-wrapper"}>
          <div className={"students-arrow-back-wrapper"}>
            <ArrowBackIosIcon
              onClick={decrease}
              className={"student-back-button"}
            />
          </div>
          <div className={"students-count-wrapper"}>
            <div className="students-impact-count">
              {impact === undefined ? (
                <div>No Donations</div>
              ) : (
                <div>{impact[counter].amount}</div>
              )}
            </div>
          </div>
          <div className={"students-arrow-forward-wrapper"}>
            <ArrowForwardIosIcon
              onClick={increase}
              className={"students-forward-button"}
            />
          </div>
        </div>
        <div className={"students-description-wrapper"}>
          {" "}
          <div className="students-impact-content">
            {impact === undefined ? (
              <Link href={"/discover"} color={"inherit"}>
                Discover Non-Profits
              </Link>
            ) : (
              <div>{impact[counter].impact_type}</div>
            )}
          </div>
        </div>
      </div>
    </Grid>
  );
}
