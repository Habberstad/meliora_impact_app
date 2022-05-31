import * as React from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import MelioraIcon from "../../media/meliora_logo.png";
import { DataGrid } from "@mui/x-data-grid";
import { CurrencyFormater, DateFormater } from "../shared-components/dateFormater";
import { PieChart } from "react-minimal-pie-chart";
import { useState } from "react";

function DataTableRows(props) {

  return (
    <>
      {props.data.map((item) => (
        <tr>
          <td>{item._id}</td>
          <td><DateFormater date={item.date} /></td>
          <td><CurrencyFormater numb={item.payment_amount} /></td>
          <td>{item.payment_frequency}</td>
          <td>
            {props.user.npo_partners.map((npo) => {
              if (npo._id === item.npo_id) return npo.name;
            })}
          </td>
          <td>
            {props.user.npo_partners.map((npo) => {
              if (npo._id === item.npo_id) return npo.category;
            })}
          </td>

        </tr>
      ))}
    </>
  );

}

const Report = React.forwardRef((props, ref) => {
  const user = props.user;

  const[year, setYear] = useState(  new Date().getFullYear());

  const transactions = props.user.donation_history;
  const filteredTransactions = transactions.filter(item => new Date(item.date).getFullYear() === year);
  const sumAmount = filteredTransactions.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue.payment_amount;
  }, 0);
  function backYear() {
    setYear(year - 1)
  }

  function forwardYear() {
    setYear(year + 1)
  }

  return (
    <div ref={ref} className={"donation-history-page-container"}>

      <Grid container>
        <Grid item xs={6} sx={{
          display: "none",
          displayPrint: "block"
        }}>
          <img src={MelioraIcon} alt="company-icon" />
          <h3>Meliora Impact</h3>
          <br />
          <h1>Annual Report for {year}</h1>
          <p>This is an overview of your contributions during the period 01.01.{year} - 31.12.{year}</p>
          <br />
          <br />
          <br />
        </Grid>

        <Grid item xs={6}>
          <Box sx={{
            display: "none",
            displayPrint: "block"
          }}>
            <h3>Your Company</h3>
            <p>org. number {user.org_number}</p>
            <p>{user.org_name}</p>
            <p>Storgaten 0334</p>
            <p>0304 Oslo</p>
          </Box>
        </Grid>
        {/* **************** OUTSIDE IS VISIBLE IN ON PRINT OUT  **********************************************************************************/}


        <Grid item xs={12} >
          <Box sx={{
            display: "block",
            displayPrint: "none"
          }}>
            <Button onClick={backYear} >back</Button>
            {year}
            <Button onClick={forwardYear}>forward</Button>
          </Box >


            <table className={"styled-table"}>
              <thead>
              <tr>
                <th>Transactions ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Organization</th>
                <th>Category</th>
              </tr>
              </thead>
              <tbody>
              <DataTableRows data={filteredTransactions} user={user} />
              </tbody>
              <tfoot>
              <tr>
                <td></td>
                <td>TOTAL</td>
                <td>
                  <CurrencyFormater numb={sumAmount} />
                </td>
              </tr>
              </tfoot>
            </table>


          </Grid>


        <Grid item xs={6}>
          <div>
            *You are entitled to a tax deduction for your contribution.
            We will ensure that the contribution is reported to the tax authorities.
            More informasjon can be found at www.skatteetaten.no.
          </div>
        </Grid>


        {/* **************** OUTSIDE IS ONLY VISIBLE ON PRINT OUT **********************************************************************************/}
        <Grid item sx={{
          display: "none",
          displayPrint: "block"
        }}>

        </Grid>
      </Grid>
    </div>

  );
});

export default Report;
