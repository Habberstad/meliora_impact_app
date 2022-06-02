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

function DataTableRows(props) {
  const { deleteSubscription } = useContext(SubscriptionApiContext);

  async function handleCancelOnclick(id) {
    await deleteSubscription(id);
    window.location.reload(false);
  }

  return (
    <>
      {props.data.active_subscriptions.map((item) => (
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
    </>
  );
}

export const SubscriptionPage = (props) => {
  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  return (
    <div className={"discover-page-container"}>
      <h1>Active Subscriptions</h1>
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
            <DataTableRows data={data} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
