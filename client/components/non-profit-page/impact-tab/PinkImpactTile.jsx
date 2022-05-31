import ForestIcon from "@mui/icons-material/Forest";

const PinkImpactTile = ({ data: { value, description } }) => {
  return (
    <div
      style={{ backgroundColor: "#FCE8E7" }}
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

export default PinkImpactTile;
