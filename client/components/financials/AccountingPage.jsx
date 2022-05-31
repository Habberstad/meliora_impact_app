import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";
import { useRef } from "react";
import Report from "./Report";


const columns = [
  { field: "_id", headerName: "Transaction id", width: 250 },
  { field: "payment_amount", headerName: "Amount", width: 130 },
  { field: "date", headerName: "Date", width: 100, type: "date", valueGetter: ({ value }) => new Date(value).toLocaleDateString("no-NO",{day: "2-digit", month: "2-digit", year: "numeric" })  },
  { field: "payment_frequency", headerName: "Type", type: "number", width: 90 },
  { field: "test", headerName: "aggregert data", description: "This column has a value getter and is not sortable.", sortable: false, width: 160,
    valueGetter: (params) =>
      `${params.row.type || ""} ${params.row.type || ""}`
  }
];


function ComponentToPrint() {
  return (
    <div>
      test
    </div>
  );
}

export const AccountingPage = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div className="bg-gray-200 p-6">
      <button
        type="button"
        onClick={handlePrint}
      >
        {" "}
        Print Resume{" "}
      </button>
      <Report ref={componentRef} />
    </div>
  );
};
/*
return (
    <div>
      <div>
        <h1>Accounting</h1>
      </div>
      <div id="print_component">

        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />


        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>


      <div style={{ height: 400, width: "1500px" }}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row)=> row._id}
          initialState={{
            filter: {
              filterModel: {
                items: [{ columnField: "Date", operatorValue: '>', value: '2.5' }],
              },
            },
          }}
         autoHeight
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
};

*/