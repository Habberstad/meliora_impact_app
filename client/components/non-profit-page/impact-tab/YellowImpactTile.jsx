import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faFemale } from "@fortawesome/free-solid-svg-icons";

const YellowImpactTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#FEFFE0" }}
      className="impact-tile-container"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon icon={faWater} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon icon={faFemale} style={{ fontSize: "30px" }} />
        )}
      </div>
      <div className="main-data-text">{value}</div>
      <div className="sub-data-text">{description}</div>
    </div>
  );
};

export default YellowImpactTile;
