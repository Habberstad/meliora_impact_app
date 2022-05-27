import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

export function isLoading() {
  return (
    <div>
      <CircularProgress />
    </div>
  );
}
