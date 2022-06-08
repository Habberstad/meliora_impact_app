import * as React from "react";
import { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Box, Button, MenuItem } from "@mui/material";
import Report from "./Report";
import "../../styles/financesPage.css";
import {
  exploreButtonB21,
  selectedFilterTabStyleNew,
  unselectedFilterTabStyle,
} from "../../styles/button-style-config";
import { DateFormater } from "../shared-components/dateFormater";
import { UserApiContext } from "../../api-client/userApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import financialsHeader from "../../media/headers/financials_header.svg";
import { GlobalHeader } from "../headers/GlobalHeader";
import * as PropTypes from "prop-types";
import { YearAndMonth } from "./YearAndMonth";
import { SubscriptionTable } from "./SubscriptionTable";

YearAndMonth.propTypes = {
  onChange: PropTypes.func,
  strings: PropTypes.arrayOf(PropTypes.string),
  callbackfn: PropTypes.func,
};

SubscriptionTable.propTypes = {
  filteredTransactions: PropTypes.any,
  prop1: PropTypes.func,
};
export const AccountingPage = (props) => {
  const months = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [selectedFilterTab, setSelectedFilterTab] = useState("donation");
  const [year, setYear] = useState(2022);

  console.log(year);

  function handleFilter(event) {
    setSelectedFilterTab(event);
  }

  function yearChange(event) {
    setYear(event.target.value);
  }

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

  console.log(year);

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
            <div>
              <Box
                sx={{
                  display: "block",
                  displayPrint: "none",
                }}
              >
                {selectedFilterTab === "donation" && (
                  <div>
                    <div className={"accounting-calender-button-container"}>
                      <div className={"accounting-calender-wrapper"}>
                        <YearAndMonth
                          onChange={yearChange}
                          strings={months}
                          callbackfn={(m) => <MenuItem value={m}>{m}</MenuItem>}
                        />
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
                    <Report
                      filteredTransactions={filteredTransactions}
                      ref={componentRef}
                      user={props.user}
                    />
                  </div>
                )}
                {selectedFilterTab === "subscription" && (
                  <div className={"financials-subscription-wrapper"}>
                    <Box
                      sx={{
                        display: "block",
                        displayPrint: "none",
                      }}
                    >
                      <div className={"accounting-calender-button-container"}>
                        <YearAndMonth
                          onChange={yearChange}
                          strings={months}
                          callbackfn={(m) => <MenuItem value={m}>{m}</MenuItem>}
                        />
                      </div>
                    </Box>
                    <SubscriptionTable
                      filteredTransactions={filteredTransactions}
                      prop1={(item) => (
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
                      )}
                    />
                  </div>
                )}
              </Box>
            </div>

            {selectedFilterTab === "statistics" && (
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
