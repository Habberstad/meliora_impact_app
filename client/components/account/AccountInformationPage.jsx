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

  console.log("data table", data);

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
              <td>{item.npo_name}</td>
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

  console.log("accountpage", user);

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  return (
    <div className={"discover-page-container"}>
      <h1>Account Information</h1>
      <p>
        Dive in and learn about which projects our passionate NPOs are engaged
        with. Quickly sort and collaborate on different propositions we can
        offer.{" "}
      </p>

      <br />

      <div>
        <div>Company Information</div>
        <div>Organization name:</div>
        <div>{data.org_name}</div>
        <div>Organization number:</div>
        <div>{data.org_number}</div>
      </div>

      <br />

      <div>
        <h3>Payment method</h3>

        <label>Current:</label>
        <p>{data.payment_option}</p>
        <Button>Change</Button>
      </div>

      <br />

      <div>
        <h3>Active NPO Subscriptions</h3>

        <SubscriptionTable data={data} />
      </div>

      <br />

      <div>
        <h3>Platform Subscription</h3>

        <label>Current:</label>
        <p>{data.subscription_type}</p>
        <Button>Change</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
};
