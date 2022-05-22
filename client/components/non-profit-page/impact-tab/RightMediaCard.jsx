export function RightMediaCard() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://images.unsplash.com/photo-1490424660416-359912d314b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740")`,
      }}
      className="right-media-card"
    >
      <div
        style={{
          display: "flex",
          width: "auto",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            padding: "4px 10px",
            borderTopRightRadius: "14px",
          }}
        >
          Leve Havet
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "auto",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7",
            color: "#FFF",
            padding: "4px 10px",
            maxWidth: "450px",
            margin: "0 0 30px 25px",
            fontSize: "25px",
            fontWeight: "500",
            overflow: "none",
          }}
        >
          HOW NORWAYS BIGGEST BANK HELPED BUILD 5 SCHOOLS
        </div>
      </div>
    </div>
  );
}
