import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faSchool } from "@fortawesome/free-solid-svg-icons";

const GreenImpactTile = ({ data: { value, description }, category }) => {
  console.log("cat", category);
  return (
    <div
      style={{ backgroundColor: "#E3FCE4" }}
      className="impact-tile-container"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon icon={faFish} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon icon={faSchool} style={{ fontSize: "30px" }} />
        )}
      </div>
      <div className="main-data-text">{value}</div>
      <div className="sub-data-text">{description}</div>
    </div>
  );
};

export default GreenImpactTile;
