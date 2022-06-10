import { SubscriptionApiContext } from "../../api-client/subscriptionApiContext";
import { DateFormater } from "../shared-components/dateFormater";
import { Button } from "@mui/material";
import { exploreButtonB21 } from "../../styles/button-style-config";
import { useContext } from "react";

export const SubscriptionTable = ({ data }) => {
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
            <tr key={item._id}>
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
                <Button
                  sx={exploreButtonB21}
                  onClick={() => handleCancelOnclick(item._id)}
                >
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
