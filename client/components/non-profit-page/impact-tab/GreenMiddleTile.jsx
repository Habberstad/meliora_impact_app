import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
const GreenMiddleTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#E3FCE4", color: "#000" }}
      className="small-data-box"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon icon={faOtter} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon icon={faPeopleRoof} style={{ fontSize: "30px" }} />
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

export default GreenMiddleTile;
