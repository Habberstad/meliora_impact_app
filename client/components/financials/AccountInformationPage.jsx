import { CurrencyFormater, DateFormater } from "../shared-components/dateFormater";
import * as React from "react";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { SubscriptionApiContext } from "../../api-client/subscriptionApiContext";
import { UserApiContext } from "../../api-client/userApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import "../../styles/discoverPage.css";

function SubscriptionTable(props) {
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
        {props.data.active_subscriptions.map((item) => (
          <tr>
            <td>{item._id}</td>
            <td>{item.npo_name}</td>
            <td>{item.payment_frequency}</td>
            <td>{item.payment_amount}</td>
            <td><DateFormater date={item.date} /></td>
            <td></td>
            <td><Button onClick={() => handleCancelOnclick(item._id)}>Cancel</Button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );

}


export const AccountInformationPage = (props) => {
  const { getCurrentUser } = useContext(UserApiContext);
  const { loading, error, data } = useLoading(
    async () => await getCurrentUser(),
    []
  );

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  return (
    <div className={"discover-page-container"}>
      <h1>Account Information</h1>
      <p>Dive in and learn about which projects our passionate NPOs are engaged with. Quickly sort and collaborate on different propositions we can offer. </p>

      <br/>

      <div>
        <h3>Company Information</h3>
        <p>org number: 2134</p>
        <p>org name: Placeholder AS</p>
        <p>address: Placeholder 22 </p>
      </div>

      <br/>

      <div>
        <h3>Payment method</h3>

        <label>Current:</label>
        <p>{data.payment_option}</p>
        <Button>Change</Button>
      </div>

      <br/>

      <div>
        <h3>Active NPO Subscriptions</h3>

        <SubscriptionTable data={data} />
      </div>

      <br/>

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