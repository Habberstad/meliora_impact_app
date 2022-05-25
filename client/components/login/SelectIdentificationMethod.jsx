import { BackButton } from "./BackButton";
import { Button } from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";
import { useNavigate } from "react-router";

export const SelectIdentificationMethod = () => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <BackButton />
      <div>
        <h1>Identify Yourself</h1>
        <p>Meliora Partner (check)</p> {/* Todo subscription selected */}
      </div>
      <div>
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
        <Button
          onClick={() => {
            navigate("/register-form");
          }}
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
          Register Manually
        </Button>
      </div>
    </div>
  );
};
