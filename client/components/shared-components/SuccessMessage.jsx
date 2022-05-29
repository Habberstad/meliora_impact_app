import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import * as React from "react";

const SuccessMessage = ({ message }) => (
  <div className="company-success-message">
    <CheckCircleIcon sx={{ marginRight: "10px" }} /> {message}
  </div>
);

export default SuccessMessage;
