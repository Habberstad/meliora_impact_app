import ErrorIcon from "@mui/icons-material/Error";
import * as React from "react";

const ErrorMessage = ({ message }) => (
  <div className="company-error-message">
    <ErrorIcon sx={{ marginRight: "10px" }} /> {message}
  </div>
);

export default ErrorMessage;
