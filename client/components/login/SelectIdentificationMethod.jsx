import { BackButton } from "./BackButton";
import { Button } from "@mui/material";
import GoogleIcon from "../../media/google_icon.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const SelectIdentificationMethod = (props) => {
  const navigate = useNavigate();
  return (
    <div className="login-content">
      <BackButton />
      <div className={"login-content-header"}>
        <h1>Identify Yourself</h1>
      </div>
      <div>
        <div
          onClick={() => {
            props.google();
          }}
          style={{ textDecoration: "none" }}
        >
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
      <p>
        Already got an account? <Link to={"/login-form"}>Log in here.</Link>
      </p>
    </div>
  );
};
