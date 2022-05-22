import ForestIcon from "@mui/icons-material/Forest";

const ImpactTile = ({}) => {
  return (
    <div style={{ backgroundColor: "#E3FCE4" }} className="tile-container">
      <div className="icon-container">
        <ForestIcon />
      </div>
      <div className="main-data-text">100</div>
      <div className="sub-data-text">Species have been saved</div>
    </div>
  );
};

export default ImpactTile;
