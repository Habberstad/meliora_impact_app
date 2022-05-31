import ForestIcon from "@mui/icons-material/Forest";

const GreenImpactTile = ({ data: { value, description } }) => {
  return (
    <div
      style={{ backgroundColor: "#E3FCE4" }}
      className="impact-tile-container"
    >
      <div className="icon-container">
        <ForestIcon />
      </div>
      <div className="main-data-text">{value}</div>
      <div className="sub-data-text">{description}</div>
    </div>
  );
};

export default GreenImpactTile;
