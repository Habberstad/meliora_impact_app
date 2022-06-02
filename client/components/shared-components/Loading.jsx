import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

export function isLoading() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const quotes = [
    "Realizing dreams...",
    "Saving the turtles...",
    "Educating children",
    "Creating opportunities...",
    "Cleaning the ocean...",
  ];

  return (
    <div className="loading-state">
      <div>{quotes[getRandomInt(quotes.length)]}</div>
      <CircularProgress
        sx={{ color: "#7209B7", marginTop: "20px" }}
        size={60}
      />
    </div>
  );
}
