import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrellaBeach,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const YellowMiddleTile = ({ data: { value, description }, category }) => {
  return (
    <div
      style={{ backgroundColor: "#FEFFE0", color: "#000" }}
      className="small-data-box"
    >
      <div className="icon-container">
        {category === "water" ? (
          <FontAwesomeIcon
            icon={faUmbrellaBeach}
            style={{ fontSize: "30px" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faGraduationCap}
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

export default YellowMiddleTile;
