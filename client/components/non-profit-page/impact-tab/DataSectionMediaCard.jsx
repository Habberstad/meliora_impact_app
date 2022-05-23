export function DataSectionMediaCard() {
  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296")`,
        }}
        className="right-data-container"
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
              backgroundColor: "rgba(255, 255, 255, 0.9",
              color: "#000",
              padding: "4px 10px",
              maxWidth: "250px",
              margin: "0 0 30px 25px",
              fontSize: "25px",
              fontWeight: "500",
              overflow: "none",
            }}
          >
            Children Schools Around the World
          </div>
        </div>
      </div>
    </>
  );
}
