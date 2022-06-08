import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <div className={"back-container"}>
      <div onClick={() => navigate(-1)}>
        <ArrowBackIosIcon sx={{ fontSize: 14 }} />
        Back
      </div>
    </div>
  );
}
