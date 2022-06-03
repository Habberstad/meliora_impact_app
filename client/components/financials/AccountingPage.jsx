import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Box, Button, Grid, MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import Report from "./Report";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
import financialsHeader from "../../media/financials_header.png";
import { GlobalHeader } from "../headers/GlobalHeader";

export const AccountingPage = (props) => {
  const [selectedFilterTab, setSelectedFilterTab] = useState("donation");
  const [filterTab, setFilterTab] = useState("donation");

  const [year, setYear] = useState(2022);

  function handleFilter(event) {
    setSelectedFilterTab(event);
    setFilterTab(event);
  }

  function yearChange(event) {
    setYear(event.target.value);
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

  const filteredTransactions = data.active_subscriptions.filter(
    (item) => new Date(item.date).getFullYear() === year
  );

  return (
    <div className="financials-page-wrapper">
      <GlobalHeader
        title={"Financials"}
        subtitle={"Control your contribution flow"}
        desc={
          "Access live statistics of your history on our platform. All the data your organization will need to conveniently log regular reports."
        }
        image={financialsHeader}
      />
      <div className={"financials-page-container"}>
        {/* **************** START: INSIDE ONLY VISIBLE ON BROWSER PAGE **********************************************************************************/}

        <div className={"donation-history-page-container"}>
          <div className={"donation-history-page-wrapper"}>
            <div className={"report-history-filter-wrapper"}>
              <Button
                onClick={() => handleFilter("donation")}
                sx={
                  selectedFilterTab === "donation"
                    ? selectedFilterTabStyleNew
                    : unselectedFilterTabStyle
                }
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
                    <Button
                      disabled
                      onClick={() => handleFilter("statistics")}
                      sx={
                        selectedFilterTab === "statistics"
                          ? selectedFilterTabStyleNew
                          : unselectedFilterTabStyle
                      }
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
                      <div>
                        <table className={"styled-table"}>
                          <thead>
                            <tr>
                              <th>Subscription ID</th>
                              <th>Organization</th>
                              <th>Frequency</th>
                              <th>Amount</th>
                              <th>Signing date</th>
                              <th>Cancelled date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredTransactions.map((item) => (
                              <tr>
                                <td>{item._id}</td>
                                <td>
                                  {data.npo_partners.map((npo) => {
                                    if (npo._id === item.npo_id)
                                      return npo.name;
                                  })}
                                </td>
                                <td>{item.payment_frequency}</td>
                                <td>{item.payment_amount}</td>
                                <td>
                                  <DateFormater date={item.date} />
                                </td>
                                <td>Active</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
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
                </Box>
                <div>
                  <table className={"styled-table-finances"}>
                    <thead>
                      <tr>
                        <th>Subscription ID</th>
                        <th>Organization</th>
                        <th>Frequency</th>
                        <th>Amount</th>
                        <th>Signing date</th>
                        <th>Cancelled date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((item) => (
                        <tr>
                          <td>{item._id}</td>
                          <td>
                            {data.npo_partners.map((npo) => {
                              if (npo._id === item.npo_id) return npo.name;
                            })}
                          </td>
                          <td>{item.payment_frequency}</td>
                          <td>{item.payment_amount}</td>
                          <td>
                            <DateFormater date={item.date} />
                          </td>
                          <td>Active</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
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
                marginBottom: "30px",
                marginLeft: "50px",
                backgroundColor: "#7209B7",
                "&:hover": {
                  backgroundColor: "#8d28ce",
                },
              }}
            >
              Print to PDF
            </Button>

            {filterTab === "statistics" && (
              <img
                className="accounting-image"
                src="http://localhost:3000/header-image-partners.9fd59cdb.png?1654168554381"
                alt="image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
