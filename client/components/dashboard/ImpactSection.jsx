import * as React from "react";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ImpactSection(props) {
  const [counter, setCounter] = useState(1);
  const impact = props.data?.active_subscriptions[0]?.impacts;

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
            {impact && (
              <ArrowBackIosIcon
                onClick={decrease}
                className={"student-back-button"}
              />
            )}
          </div>
          <div className={"students-count-wrapper"}>
            <div className="students-impact-count">
              {impact === undefined ? (
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    width: "160px",
                  }}
                >
                  Donate to one of our non-profits to see your impact
                </div>
              ) : (
                <div>{impact[counter].amount}</div>
              )}
            </div>
          </div>
          <div className={"students-arrow-forward-wrapper"}>
            {impact && (
              <ArrowForwardIosIcon
                onClick={increase}
                className={"students-forward-button"}
              />
            )}
          </div>
        </div>
        <div className={"students-description-wrapper"}>
          <div className="students-impact-content">
            {impact === undefined ? (
              <Button
                href={"/discover"}
                sx={{
                  width: "100px",
                  height: "35px",
                  borderRadius: "10px",
                  backgroundColor: "#551477",
                  textTransform: "none",
                  color: "white",
                  fontSize: "12px",
                  boxShadow:
                    "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
                  fontWeight: "400",
                  "&:hover": {
                    backgroundColor: "#7209B7",
                    boxShadow:
                      "0px 0px 2px rgba(148, 157, 176, 0.24), 0px 16px 32px -4px rgba(148, 157, 176, 0.24)",
                  },
                }}
              >
                Explore
              </Button>
            ) : (
              <div style={{ fontSize: "12px" }}>
                {impact[counter].impact_type}
              </div>
            )}
          </div>
        </div>
      </div>
    </Grid>
  );
}
