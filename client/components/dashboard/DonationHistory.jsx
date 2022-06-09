import {
  CurrencyFormater,
  DateFormater,
} from "../shared-components/dateFormater";
import * as React from "react";
import { useContext } from "react";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TransactionApiContext } from "../../api-client/transactionApiContext";
import { Grid, MenuItem, Select } from "@mui/material";

function DonationItem({ donation }) {
  return (
    <div className="donation-list-item">
      <div className="donation-timeline-dot" />
      <div className="donation-data-container">
        <div className="left-donation-text">
          <div style={{ fontSize: "13px", fontWeight: "500" }}>
            Donated to{" "}
            <span style={{ color: "#551477", fontWeight: "600" }}>
              {donation.npo_name}
            </span>
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginTop: "3px",
            }}
          >
            <DateFormater date={donation.date} />
          </div>
        </div>
        <div className="right-donation-text">
          <CurrencyFormater numb={donation.payment_amount} />
        </div>
      </div>
    </div>
  );
}

export function DonationHistory() {
  const [npo, setNpo] = useState("");
  const navigate = useNavigate();

  const { getCurrentUsersTransactions } = useContext(TransactionApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUsersTransactions(),
    []
  );
  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  const handleChange1 = (event) => {
    setNpo(event.target.value);
  };

  const history = data;
  const filteredHistory = data.filter((donation) => donation.npo_name === npo);
  let donationHistory = filteredHistory.length > 0 ? filteredHistory : history;

  const uniqueNpoNames = [
    ...new Set(data.map((donation) => donation.npo_name)),
  ];

  return (
    <div className={"donation-history-filter"}>
      <div className={"donation-history-title"}>Donation History</div>
      {history.length > 0 ? (
        <>
          <div className={"donation-history-filter-wrapper"}>
            <div className={"donation-filter-select-wrapper"}>
              <Select
                className={"donation-filter-select"}
                defaultValue={"Recent"}
                onChange={handleChange1}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  color: "#ffff",
                  "& .MuiSelect-iconOpen": { color: "#ffff" },
                  "& .MuiSelect-icon": { color: "#ffff" },
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <MenuItem value={"Recent"} label="All">
                  Recent
                </MenuItem>
                {uniqueNpoNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <Grid container justifyContent={"center"}>
            <div className={"donation-history-timeline-container"}>
              <Grid item>
                <div className="donation-list-container">
                  {donationHistory
                    .slice(0)
                    .reverse()
                    .map((donation, index) => {
                      if (index <= 3)
                        return (
                          <DonationItem
                            key={donation._id}
                            donation={donation}
                          />
                        );
                    })}
                </div>
              </Grid>
            </div>
            <div className={"donation-see-all-wrapper"}>
              <div
                onClick={() => navigate("/accounting")}
                className={"donation-see-all"}
              >
                See all donations
              </div>
            </div>
          </Grid>
        </>
      ) : (
        <div>
          <div>
            <div className="donation-placeholder-text">
              <div style={{ marginTop: "100px " }}>
                You currently have no donation history
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
