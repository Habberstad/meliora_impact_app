import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const PinkMiddleTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#FCE8E7", color: "#000" }}
      className="small-data-box"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            style={{ fontSize: "30px" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            style={{ fontSize: "30px" }}
          />
        )}
      </div>
      <div className="main-data-text">{value}</div>
      <div
        style={{
          fontSize: "14px",
          margin: "0 10px",
          textAlign: "center",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default PinkMiddleTile;
