import * as React from "react";
import { useState } from "react";
import { Box, Button, Grid, MenuItem, Select } from "@mui/material";
import MelioraIcon from "../../media/meliora_logo.png";
import { DonationTable } from "./DonationTable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Report = React.forwardRef((props, ref) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const user = props.user;
  const transactions = props.user.donation_history;
  const filteredTransactions = transactions.filter(
    (item) => new Date(item.date).getFullYear() === year
  );

  const sumAmount = filteredTransactions.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.payment_amount;
  }, 0);

  function yearChange(event) {
    setYear(event.target.value);
  }

  return (
    <div ref={ref}>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "none",
            displayPrint: "block",
          }}
        >
          <img src={MelioraIcon} alt="company-icon" />
          <h3>Meliora Impact</h3>
          <br />
          <h1>Annual Report for {year}</h1>
          <p>
            This is an overview of your contributions during the period 01.01.
            {year} - 31.12.{year}
          </p>
          <br />
          <br />
          <br />
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "none",
              displayPrint: "block",
            }}
          >
            <h3>Your Company</h3>
            <p>org. number {user.org_number}</p>
            <p>{user.org_name}</p>
            <p>Storgaten 0334</p>
            <p>0304 Oslo</p>
          </Box>
        </Grid>
        {/* **************** OUTSIDE IS VISIBLE IN ON PRINT OUT  **********************************************************************************/}

        <Grid item xs={12}>
          <Box
            sx={{
              display: "block",
              displayPrint: "none",
            }}
          >
            <div className={"accounting-calender"}>
              <Select
                id={"year"}
                defaultValue={"2022"}
                onChange={yearChange}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
              <Select
                id={"month"}
                defaultValue={"Juni"}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"Jan"}>Jan</MenuItem>
                <MenuItem value={"Feb"}>Feb</MenuItem>
                <MenuItem value={"Mar"}>Mar</MenuItem>
                <MenuItem value={"Juni"}>Juni</MenuItem>
              </Select>
              <CalendarMonthIcon
                className={"accounting-icon-calender"}
                fontSize={"large"}
              />

            </div>
          </Box>

          <DonationTable
            data={filteredTransactions}
            user={user}
            numb={sumAmount}
          />
        </Grid>

        <Grid item xs={6}>
          <div>
            *You are entitled to a tax deduction for your contribution. We will
            ensure that the contribution is reported to the tax authorities.
            More informasjon can be found at www.skatteetaten.no.
          </div>
        </Grid>

        {/* **************** OUTSIDE IS ONLY VISIBLE ON PRINT OUT **********************************************************************************/}
        <Grid
          item
          sx={{
            display: "none",
            displayPrint: "block",
          }}
        ></Grid>
      </Grid>
    </div>
  );
});

export default Report;
