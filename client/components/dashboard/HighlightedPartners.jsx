import * as React from "react";
import * as PropTypes from "prop-types";

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
        {props.highlighted.map(props.prop2)}
      </div>
    </div>
  );
}
