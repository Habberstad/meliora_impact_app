import * as React from "react";
import { useReactToPrint } from "react-to-print";
import { Box, Button, MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import Report from "./Report";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "../../styles/financesPage.css";
import {
  unselectedFilterTabStyle,
  selectedFilterTabStyleNew,
  exploreButtonB21,
} from "../../styles/button-style-config";
import { DateFormater } from "../shared-components/dateFormater";
import { useContext } from "react";
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
            <div>
              <Box
                sx={{
                  display: "block",
                  displayPrint: "none",
                }}
              >
                {/* ***************** END: INSIDE ONLY VISIBLE ON BROWSER PAGE ********************************************************************************** */}
                {filterTab === "donation" && (
                  <div>
                    <div className={"accounting-calender-button-container"}>
                      <div className={"accounting-calender-wrapper"}>
                        <Select
                          id={"year"}
                          defaultValue={"2022"}
                          onChange={yearChange}
                          inputProps={{ "aria-label": "Without label" }}
                          sx={{
                            borderRadius: "8px",
                            width: "100px",
                            height: "35px",
                          }}
                        >
                          <MenuItem value={2022}>2022</MenuItem>
                          <MenuItem value={2021}>2021</MenuItem>
                          <MenuItem value={2020}>2020</MenuItem>
                        </Select>
                        <Select
                          id={"month"}
                          defaultValue={"Juni"}
                          inputProps={{ "aria-label": "Without label" }}
                          sx={{
                            borderRadius: "8px",
                            width: "100px",
                            height: "35px",
                          }}
                        >
                          <MenuItem value={"Jan"}>Jan</MenuItem>
                          <MenuItem value={"Feb"}>Feb</MenuItem>
                          <MenuItem value={"Mars"}>Mars</MenuItem>
                          <MenuItem value={"April"}>April</MenuItem>
                          <MenuItem value={"Mai"}>Mai</MenuItem>
                          <MenuItem value={"Juni"}>Juni</MenuItem>
                          <MenuItem value={"Juli"}>Juli</MenuItem>
                          <MenuItem value={"August"}>Aug</MenuItem>
                          <MenuItem value={"September"}>Sep</MenuItem>
                          <MenuItem value={"Oktober"}>Okt</MenuItem>
                          <MenuItem value={"November"}>Nov</MenuItem>
                          <MenuItem value={"Desember"}>Des</MenuItem>
                        </Select>
                        <div className={"accounting-icon-calender-wrapper"}>
                          <CalendarMonthIcon fontSize={"large"} />
                        </div>
                      </div>
                      <div className={"accounting-button-wrapper"}>
                        <Button
                          type="button"
                          onClick={handlePrint}
                          variant="contained"
                          sx={exploreButtonB21}
                        >
                          Print PDF
                        </Button>
                      </div>
                    </div>
                    <Report ref={componentRef} user={props.user} />
                  </div>
                )}
                {filterTab === "subscription" && (
                  <div className={"financials-subscription-wrapper"}>
                    <Box
                      sx={{
                        display: "block",
                        displayPrint: "none",
                      }}
                    >
                      <div className={"accounting-calender-button-container"}>
                        <Select
                          id={"year"}
                          defaultValue={"2022"}
                          onChange={yearChange}
                          inputProps={{ "aria-label": "Without label" }}
                          sx={{
                            borderRadius: "8px",
                            width: "100px",
                            height: "35px",
                          }}
                        >
                          <MenuItem value={2022}>2022</MenuItem>
                          <MenuItem value={2021}>2021</MenuItem>
                          <MenuItem value={2020}>2020</MenuItem>
                        </Select>

                        <Select
                          id={"month"}
                          defaultValue={"Juni"}
                          inputProps={{ "aria-label": "Without label" }}
                          sx={{
                            borderRadius: "8px",
                            width: "100px",
                            height: "35px",
                          }}
                        >
                          <MenuItem value={"Jan"}>Jan</MenuItem>
                          <MenuItem value={"Feb"}>Feb</MenuItem>
                          <MenuItem value={"Mars"}>Mars</MenuItem>
                          <MenuItem value={"April"}>April</MenuItem>
                          <MenuItem value={"Mai"}>Mai</MenuItem>
                          <MenuItem value={"Juni"}>Juni</MenuItem>
                          <MenuItem value={"Juli"}>Juli</MenuItem>
                          <MenuItem value={"August"}>Aug</MenuItem>
                          <MenuItem value={"September"}>Sep</MenuItem>
                          <MenuItem value={"Oktober"}>Okt</MenuItem>
                          <MenuItem value={"November"}>Nov</MenuItem>
                          <MenuItem value={"Desember"}>Des</MenuItem>
                        </Select>
                        <CalendarMonthIcon
                          className={"accounting-icon-calender-wrapper"}
                          fontSize={"large"}
                        />
                      </div>
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
              </Box>
            </div>

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
