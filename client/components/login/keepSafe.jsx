import { Button } from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";

return (
  <div onClick={google} style={{ textDecoration: "none" }}>
    <Button
      sx={{
        mb: "22px",
        borderColor: "#637381",
        "&:hover": {
          borderColor: "#000",
          backgroundColor: "#FFF",
          color: "#637381",
        },
      }}
      fullWidth
      variant={"outlined"}
      size={"large"}
    >
      <img style={{ height: "25px" }} src={GoogleIcon} alt="GoogleIcon" />
    </Button>
  </div>
);
