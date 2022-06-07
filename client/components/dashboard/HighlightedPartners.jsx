import * as React from "react";
import * as PropTypes from "prop-types";
import { Button } from "@mui/material";

HighlightedPartners.propTypes = {
  onClick: PropTypes.func,
  highlighted: PropTypes.any,
  prop2: PropTypes.func,
};

export function HighlightedPartners(props) {
  return (
    <div className={"highlighted-partners-container"}>
      <div className={"highlighted-title-view-container"}>
        <div
          className={"highlighted-partners-title"}
          style={{
            fontSize: "20px",
            margin: "10px",
            fontWeight: "600",
            marginLeft: "10px",
          }}
        >
          Highlighted partners
        </div>
        <div onClick={props.onClick} className="highlighted-view-all">
          View all
        </div>
      </div>
      <div className={"accordion-wrapper"}>
        {props.highlighted.length > 0 ? (
          props.highlighted.map(props.prop2)
        ) : (
          <div>
            <div
              style={{
                width: "350px",
                fontSize: "14px",
                color: "#464D51",
                fontWeight: "500",
                marginTop: "75px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ margin: "20px 0px" }}>
                Find a partner to see highlighted information.
              </div>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
