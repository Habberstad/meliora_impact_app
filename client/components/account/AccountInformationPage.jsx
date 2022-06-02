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

const SubscriptionTable = ({ data }) => {
  const { deleteSubscription } = useContext(SubscriptionApiContext);

  async function handleCancelOnclick(id) {
    await deleteSubscription(id);
    window.location.reload(false);
  }



  return (
    <div>
      <table className={"styled-table"}>
        <thead>
          <tr>
            <th>Subscription ID</th>
            <th>Organization</th>
            <th>Type</th>
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
              <td></td>
              <td>
                <Button onClick={() => handleCancelOnclick(item._id)}>
                  Cancel
                </Button>
              </td>
              <td></td>
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

  return (
    <div className="account-page-container">
      <div className="account-page-main-title">Account Information</div>
      <div className="account-page-top-section">
        <div style={{ marginRight: "200px" }}>
          <div className="account-page-title">Company Information</div>
          <div className="account-page-stronger">Organization name:</div>
          <div className="account-page-text" style={{ marginBottom: "10px" }}>
            {data.org_name}
          </div>
          <div className="account-page-stronger">Organization number:</div>
          <div className="account-page-text">{data.org_number}</div>
        </div>

        <div>
          <div className="account-page-title">Personal Information</div>
          <div className="account-page-stronger"> Name:</div>
          <div className="account-page-text" style={{ marginBottom: "10px" }}>
            {data.org_name}
          </div>
          <div className="account-page-stronger">Email:</div>
          <div className="account-page-text">{data.org_number}</div>
        </div>
      </div>
      <div className="account-page-middle-section">
        <div>
          <div className="account-page-title">Payment method</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="account-page-payment">{data.payment_option}</div>
            <div className="account-page-edit">Change payment method</div>
          </div>
        </div>
        <div style={{ marginLeft: "160px" }}>
          <div>
            <div className="account-page-title">Platform Subscription</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="account-page-payment">
                {data.subscription_type}
              </div>
              <div className="account-page-edit">Change payment method</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "50px 0 0 0" }}>
        <div className="account-page-title">Active NPO Subscriptions</div>
        {user.active_subscriptions.length > 0 ? (
          <SubscriptionTable data={data} />
        ) : (
          "No active subscriptions"
        )}
      </div>
    </div>
  );
};
