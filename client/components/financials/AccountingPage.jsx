import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import Report from "./Report";




export const AccountingPage = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });


  const[year, setYear] = useState(  new Date().getFullYear());
  const[selectedTransactions, setSelectedTransactions] = useState("")


  function backYear() {
    setYear(year - 1)
  }

  function forwardYear() {
    setYear(year + 1)
  }

  return (
    <div >
      <button
        type="button"
        onClick={handlePrint}
      >
        {" "}
        Print to PDF{" "}
      </button>
      <br/>
      <br/>
      <br/>
      <h1>Donation history</h1>
      <Button onClick={backYear} >back</Button>
      {year}
      <Button onClick={forwardYear}>forward</Button>
      <Report ref={componentRef} user={props.user} year={year} />
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