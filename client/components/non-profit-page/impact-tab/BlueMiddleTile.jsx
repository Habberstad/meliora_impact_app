import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faBook } from "@fortawesome/free-solid-svg-icons";

const BlueMiddleTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#E0EFF4", color: "#000" }}
      className="small-data-box"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon icon={faDroplet} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon icon={faBook} style={{ fontSize: "30px" }} />
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

export default BlueMiddleTile;
