import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

const PinkImpactTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#FCE8E7" }}
      className="impact-tile-container"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon icon={faSpa} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon
            icon={faBookOpenReader}
            style={{ fontSize: "30px" }}
          />
        )}
      </div>
      <div className="main-data-text">{value}</div>
      <div className="sub-data-text">{description}</div>
    </div>
  );
};

export default PinkImpactTile;
