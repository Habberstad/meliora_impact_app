import YardIcon from "@mui/icons-material/Yard";

export function NatureTile({ data }) {
  return (
    <div className="info-tile">
      <YardIcon sx={{ color: "#7209B7", width: "50px", height: "35px" }} />
      <div className="tile-data-text">{data.value}</div>
      <div className="tile-data-sub-text">{data.description}</div>
    </div>
  );
}
