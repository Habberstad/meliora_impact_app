import ForestIcon from "@mui/icons-material/Forest";

const BlueImpactTile = ({ data }) => {
  return (
    <div
      style={{ backgroundColor: "#E0EFF4" }}
      className="impact-tile-container"
    >
      <div className="icon-container">
        <ForestIcon />
      </div>
      <div className="main-data-text">100</div>
      <div className="sub-data-text">Species have been saved</div>
    </div>
  );
};

export default BlueImpactTile;
