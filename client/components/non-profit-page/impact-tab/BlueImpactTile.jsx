import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faFaucetDrip } from "@fortawesome/free-solid-svg-icons";

const BlueImpactTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#E0EFF4" }}
      className="impact-tile-container"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon icon={faFaucetDrip} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon icon={faBook} style={{ fontSize: "30px" }} />
        )}
      </div>
      <div className="main-data-text">{value}</div>
      <div className="sub-data-text">{description}</div>
    </div>
  );
};

export default BlueImpactTile;
