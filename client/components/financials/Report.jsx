import * as React from "react";
import { Box, Grid } from "@mui/material";
import MelioraIcon from "../../media/meliora_logo.png";
import { DataGrid } from "@mui/x-data-grid";

const Report = React.forwardRef((props, ref) => {
  const columns = [
    { field: "_id", headerName: "Transaction ID", width: 250 },
    { field: "payment_amount", headerName: "Amount", width: 130 },
    {
      field: "date",
      headerName: "Date",
      width: 100,
      type: "date",
      valueGetter: ({ value }) => new Date(value).toLocaleDateString("no-NO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    },
    { field: "payment_type", headerName: "Type", type: "number", width: 90 },
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
  const user = props.user;
  const transactions = props.user.donation_history;


  const filteredTransactions = transactions.filter(item => new Date(item.date).getFullYear() === props.year);


  return (
    <div ref={ref}>
      <Grid container className={"report-container"}>
        <Grid item>
          <Box sx={{
            display: "none",
            displayPrint: "block",
          }}>
            <img src={MelioraIcon} alt="company-icon" />
            <br />
            <h1>Annual Report for {props.year}</h1>
            <br />
            <p>To</p>
            <h3>{user.org_name}</h3>
            <h3>{user.name}</h3>
            <br />
            <br />
          </Box>
        </Grid>


        <Grid item>
          <Box >
            <div style={{ height: 500, width: 800 }}>
              <DataGrid
                rows={filteredTransactions}
                columns={columns}
                getRowId={(row) => row._id}
              />
            </div>
            <div>
              Total: {filteredTransactions.reduce ((accum, item) => {return accum + item.payment_amount}, 0)}
            </div>

          </Box>
        </Grid>

        <Grid item sx={{
            display: "none",
            displayPrint: "block"}}>
          Bottom
        </Grid>
      </Grid>
    </div>

  );
});

export default Report;
