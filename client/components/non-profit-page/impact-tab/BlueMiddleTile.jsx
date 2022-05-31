import HandshakeIcon from "@mui/icons-material/Handshake";

const BlueMiddleTile = ({ data: { value, description } }) => {
  return (
    <div
      style={{ backgroundColor: "#E0EFF4", color: "#000" }}
      className="small-data-box"
    >
      <div className="icon-container">
        <HandshakeIcon sx={{ fontSize: "35px" }} />
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
