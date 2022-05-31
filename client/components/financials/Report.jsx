import * as React from "react";
import { Box } from "@mui/material";
import MelioraIcon from "../../media/meliora_logo.png";
import { DataGrid } from "@mui/x-data-grid";

const Report = React.forwardRef((props, ref) => {
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "payment_amount", headerName: "Amount", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "type", headerName: "Type", type: "number", width: 90 },
    {
      field: "test",
      headerName: "aggregert data",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.type || ""} ${params.row.type || ""}`
    }
  ];

  const transactions = props.user.donation_history;
  const user = props.user

  return (

    <div ref={ref}>

      <Box sx={{

        display: "none",
        displayPrint: "block",
        m: 1,
        fontSize: "0.875rem",
        fontWeight: "700"
      }}>
        <img src={MelioraIcon} alt="company-icon" />
        <br/>
        <h1>Report</h1>
        <br />
        <p>To</p>
        <h3>{user.org_name}</h3>
        <h3>{user.name}</h3>
        <br />
        <br />
      </Box>

      <Box>
        <div style={{ height: 400, width: "1500px" }}>
          <DataGrid
            rows={transactions}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </div>
      </Box>

    </div>

  );
});

export default Report;
