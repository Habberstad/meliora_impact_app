import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import Report from "./Report";
import "../../styles/financesPage.css";
import { PieChart } from 'react-minimal-pie-chart';


export const AccountingPage = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });



  return (
    <div className={"discover-page-container"} >
      {/* **************** START: INSIDE ONLY VISIBLE ON BROWSER PAGE **********************************************************************************/}
      <br/>
      <Button
        type="button" onClick={handlePrint}
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
      <br/>
      <br/>
      <h1>Donation history</h1>

      {/* ***************** END: INSIDE ONLY VISIBLE ON BROWSER PAGE ********************************************************************************** */}


      <Report ref={componentRef} user={props.user}   />
    </div>
  );
};
