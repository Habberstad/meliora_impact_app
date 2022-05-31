import PercentIcon from "@mui/icons-material/Percent";

export function DataTile({ data }) {
  return (
    <div className="info-tile">
      <PercentIcon sx={{ color: "#7209B7", width: "50px", height: "35px" }} />
      <div className="tile-data-text">{data.value}</div>
      <div className="tile-data-sub-text">{data.description}</div>
    </div>
  );
}
