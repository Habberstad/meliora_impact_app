import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Box, Button, Grid, MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import Report from "./Report";
import SubscriptionTable from "./SubscriptionsPage";
import "../../styles/financesPage.css";
import {
  unselectedFilterTabStyle,
  selectedFilterTabStyleNew,
} from "../../styles/button-style-config";
import {
  CurrencyFormater,
  DateFormater,
} from "../shared-components/dateFormater";
import { Subscript } from "@mui/icons-material";
import { useContext } from "react";
import { SubscriptionApiContext } from "../../api-client/subscriptionApiContext";
import { UserApiContext } from "../../api-client/userApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

export const AccountingPage = (props) => {
  const [selectedFilterTab, setSelectedFilterTab] = useState("donation");
  const [filterTab, setFilterTab] = useState("donation");
  const [year, setYear] = useState(new Date().getFullYear());
  function handleFilter(event) {
    setSelectedFilterTab(event);
    setFilterTab(event);
  }

  function yearChange(event) {
    setYear(event);
  }

  console.log(selectedFilterTab);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  return (
    <div className={"discover-page-container"}>
      {/* **************** START: INSIDE ONLY VISIBLE ON BROWSER PAGE **********************************************************************************/}
      {filterTab === "donation" && <h1>Donation history</h1>}
      {filterTab === "subscription" && <h1>Subscription history</h1>}
      {filterTab === "statistics" && <h1>Statistics</h1>}

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
      <div className={"donation-history-page-container"}>
        <div>
          <div className={"report-history-filter-wrapper"}>
            <Button
              onClick={() => handleFilter("donation")}
              sx={
                selectedFilterTab === "donation"
                  ? selectedFilterTabStyleNew
                  : unselectedFilterTabStyle
              }
              className={"report-donation-history-filter"}
            >
              Donation History
            </Button>

            <Button
              onClick={() => handleFilter("subscription")}
              sx={
                selectedFilterTab === "subscription"
                  ? selectedFilterTabStyleNew
                  : unselectedFilterTabStyle
              }
              className={"report-subscription-history-filter"}
            >
              Subscription History
            </Button>

            <Button
              onClick={() => handleFilter("statistics")}
              sx={
                selectedFilterTab === "statistics"
                  ? selectedFilterTabStyleNew
                  : unselectedFilterTabStyle
              }
              className={"report-statistics-filter"}
            >
              Statistics
            </Button>
          </div>
          {/* ***************** END: INSIDE ONLY VISIBLE ON BROWSER PAGE ********************************************************************************** */}
          {filterTab === "donation" && (
            <Report ref={componentRef} user={props.user} />
          )}
          {filterTab === "subscription" && (
            <div>
              <Box
                sx={{
                  display: "block",
                  displayPrint: "none",
                }}
              >
                <Select
                  value={year}
                  onChange={yearChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                </Select>
              </Box>
              <div>
                <table className={"styled-table"}>
                  <thead>
                    <tr>
                      <th>Subscription ID</th>
                      <th>Organization</th>
                      <th>Frequency</th>
                      <th>Amount</th>
                      <th>Signing date</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.active_subscriptions.map((item) => (
                      <tr>
                        <td>{item._id}</td>
                        <td>{item.npo_name}</td>
                        <td>{item.payment_frequency}</td>
                        <td>{item.payment_amount}</td>
                        <DateFormater date={item.date} />
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filterTab === "statistics" && (
            <img
              className="accounting-image"
              src="http://localhost:3000/header-image-partners.9fd59cdb.png?1654168554381"
              alt="dsada"
            />
          )}
        </div>
      </div>
    </div>
  );
};
