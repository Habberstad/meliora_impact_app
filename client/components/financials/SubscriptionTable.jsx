import * as React from "react";

export function SubscriptionTable(props) {
  return (
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
        <tbody>{props.filteredTransactions.map(props.prop1)}</tbody>
      </table>
    </div>
  );
}
