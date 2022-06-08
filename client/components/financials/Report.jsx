import * as React from "react";
import { useState } from "react";
import { Box, Button, Grid, Link, MenuItem, Select } from "@mui/material";
import MelioraIcon from "../../media/meliora_logo.png";
import { DonationTable } from "./DonationTable";
import { useContext } from "react";
import { TransactionApiContext } from "../../api-client/transactionApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

const Report = React.forwardRef((props, ref) => {
  const user = props.user;
  const year = props.year

  const { getCurrentUsersTransactions } = useContext(TransactionApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUsersTransactions(),
    []
  );
  if (loading) return isLoading();
  if (error) return <Error error={error} />;


  const filteredTransactions = data.filter(
    (item) => new Date(item.date).getFullYear() === year
  );

  const sumAmount = filteredTransactions.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.payment_amount;
  }, 0);

  return (
    <div ref={ref}>
      <Grid container className={"report-page"}>
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
          <h2>Annual Report for {year}</h2>
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
            className={"report-top-right"}
            sx={{
              display: "none",
              displayPrint: "block",
            }}
          >
            <div className="account-page-title">Your Company</div>
            <div className={"account-page-text"}>
              org. number {user.org_number}
            </div>
            <div className={"account-page-text"}>{user.org_name}</div>
            <div className={"account-page-text"}>{user.address}</div>
            <div className={"account-page-text"}>
              {user.postal_code + " " + user.city}
            </div>
          </Box>
        </Grid>
        {/* **************** OUTSIDE IS VISIBLE IN ON PRINT OUT  **********************************************************************************/}

        <Grid item xs={12}>
          <DonationTable
            data={filteredTransactions}
            numb={sumAmount}
            year={year}
          />
        </Grid>

        <div className={"account-tax-print-wrapper"}>
          <div className={"account-tax-wrapper"}>
            <Link
              color={"inherit"}
              href={
                "https://www.skatteetaten.no/satser/gaver-til-frivillige-organisasjoner/"
              }
            >
              Read more about local tax regulations regarding donations
            </Link>
          </div>
        </div>

        {/* **************** OUTSIDE IS ONLY VISIBLE ON PRINT OUT **********************************************************************************/}
      </Grid>
    </div>
  );
});

export default Report;
