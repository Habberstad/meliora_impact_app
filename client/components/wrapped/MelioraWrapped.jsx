import "../../styles/melioraWrapped.css";
import backgroundImg from "../../media/meliora_wrapped_background.png";
import * as React from "react";

const MelioraWrapped = () => {
  return (
    <div className="meliora-wrapped-container">
      <div>
        <img
          src={backgroundImg}
          alt="backgroundimage"
          className="meliora-background-image"
        />
      </div>
    </div>
  );
};

export default MelioraWrapped;
