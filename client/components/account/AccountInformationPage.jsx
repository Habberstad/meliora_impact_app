import "../../styles/account-page-styles.css";

import {
  CurrencyFormater,
  DateFormater,
} from "../shared-components/dateFormater";
import * as React from "react";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { SubscriptionApiContext } from "../../api-client/subscriptionApiContext";
import { UserApiContext } from "../../api-client/userApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import "../../styles/discoverPage.css";
import { GlobalHeader } from "../headers/GlobalHeader";
import accountHeader from "../../media/account_header.png";

const SubscriptionTable = ({ data }) => {
  const { deleteSubscription } = useContext(SubscriptionApiContext);

  async function handleCancelOnclick(id) {
    await deleteSubscription(id);
    window.location.reload(false);
  }

  return (
    <div>
      <table className={"styled-table"} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Subscription ID</th>
            <th>Organization</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Signing date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.active_subscriptions.map((item) => (
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
              <td style={{ width: "30px" }}>
                <Button onClick={() => handleCancelOnclick(item._id)}>
                  Cancel
                </Button>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const AccountInformationPage = ({ user }) => {
  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  console.log(data);
  return (
    <div className="account-page-wrapper">
      <GlobalHeader
        title={"My Account"}
        subtitle={"Essential data - easily accessible "}
        desc={
          "All the critical information about user, your organization and the current active subscriptions"
        }
        image={accountHeader}
      />

      <div className="account-page-container">
        <div>
          <div className="settings-content-container">
            <div className="settings-content-top">
              <div className="settings-card">
                <div className="account-page-title">Company Information</div>
                <div className="account-page-stronger">Organization name:</div>
                <div
                  className="account-page-text"
                  style={{ marginBottom: "10px" }}
                >
                  {data.org_name}
                </div>
                <div className="account-page-stronger">
                  Organization number:
                </div>
                <div className="account-page-text">{data.org_number}</div>
                <br></br>
              </div>

              <div className="settings-card">
                <div className="account-page-title">User Information</div>
                <div className="account-page-stronger">Name:</div>
                <div className="account-page-text">{data.name}</div>
                <div className="account-page-stronger">Address:</div>
                <div className="account-page-text">
                  {data.address}, {data.city}
                </div>
                <div className="account-page-stronger">Email:</div>
                <div className="account-page-text">{data.email}</div>
                <br></br>
              </div>
            </div>

            <div className="settings-content-top">
              <div className="settings-card">
                <div className="account-page-title">Payment method</div>
                <div className="account-page-payment">
                  {data.payment_option.toUpperCase()}
                </div>
                <div className="account-page-edit">Change payment method</div>
              </div>
              <div className="settings-card">
                <div className="account-page-title">Platform Subscription</div>
                <div className="account-page-payment">
                  {data.subscription_type.toUpperCase()}
                </div>
                <div className="account-page-edit">Change subscription</div>
              </div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <div className="account-page-title">Active NPO Subscriptions</div>
          {user.active_subscriptions.length > 0 ? (
            <SubscriptionTable data={data} />
          ) : (
            "No active subscriptions"
          )}
        </div>
      </div>
    </div>
  );
};
