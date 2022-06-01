import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Box, Button, Grid } from "@mui/material";
import { useRef, useState } from "react";
import Report from "./Report";
import "../../styles/financesPage.css";
import {
  hoverTabStyleNew,
  selectedTabStyleNew,
} from "../../styles/button-style-config";

export const AccountingPage = (props) => {

  const [selectedFilterTab, setSelectedFilterTab] = useState("");
  function handleFilter(event) {
    setSelectedFilterTab(event);
  }

  console.log(selectedFilterTab);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={"discover-page-container"}>
      {/* **************** START: INSIDE ONLY VISIBLE ON BROWSER PAGE **********************************************************************************/}
      <h1>Donation history</h1>
      <Button
        type="button"
        onClick={handlePrint}
        variant="contained"
        sx={{
          mx: "10px",
          width: "150px",
          height: "35px",
          textTransform: "none",
          borderRadius: "10px",
          backgroundColor: "#7209B7",
          "&:hover": {
            backgroundColor: "#8d28ce",
          },
        }}
      >
        Print to PDF
      </Button>
      <Grid container direction={"row"} item>
        <Box
          sx={{
            display: "block",
            displayPrint: "none",
            width: "100%",
          }}
        >
          <div className={"report-history-filter-wrapper"}>
            <Button
              onClick={() => handleFilter("")}
              sx={
                selectedFilterTab === ""
                  ? selectedTabStyleNew
                  : hoverTabStyleNew
              }
              className={"report-donation-history-filter"}
            >
              Donation History
            </Button>

            <Button
              onClick={() => handleFilter("subscription")}
              sx={
                selectedFilterTab === "subscription"
                  ? selectedTabStyleNew
                  : hoverTabStyleNew
              }
              className={"report-subscription-history-filter"}
            >
              Subscription History
            </Button>

            <Button
              onClick={() => handleFilter("statistics")}
              sx={
                selectedFilterTab === "statistics"
                  ? selectedTabStyleNew
                  : hoverTabStyleNew
              }
              className={"report-statistics-filter"}
            >
              Statistics
            </Button>
          </div>
        </Box>
      </Grid>

      {/* ***************** END: INSIDE ONLY VISIBLE ON BROWSER PAGE ********************************************************************************** */}

      <Report ref={componentRef} user={props.user} />
    </div>
  );
};
