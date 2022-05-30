import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactToPrint from "react-to-print"

const columns = [
  { field: "_id", headerName: "ID", width: 250 },
  { field: "amount", headerName: "Amount", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "type", headerName: "Type", type: "number", width: 90 },
  { field: "test", headerName: "aggregert data", description: "This column has a value getter and is not sortable.", sortable: false, width: 160,
    valueGetter: (params) =>
      `${params.row.type || ""} ${params.row.type || ""}`
  }
];



export const AccountingPage = (props) => {
  console.log(props.user.donation_history);

  const transactions = props.user.donation_history;

  return (
    <div>
      <div>
        <h1>Accounting</h1>
      </div>
      <button>2022</button><button>2022</button>
      <div style={{ height: 400, width: "1500px" }}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row)=> row._id}
        />
      </div>
    </div>
  );
};