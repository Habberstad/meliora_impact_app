import { CurrencyFormater, DateFormater } from "../shared-components/dateFormater";
import * as React from "react";

function DataTableRows(props) {

  return (
    <>
      {props.data.map((item) => (
        <tr>
          <td>{item._id}</td>
          <td><DateFormater date={item.date} /></td>
          <td><CurrencyFormater numb={item.payment_amount} /></td>
          <td>{item.payment_frequency}</td>
          <td>
            {props.user.npo_partners.map((npo) => {
              if (npo._id === item.npo_id) return npo.name;
            })}
          </td>
          <td>
            {props.user.npo_partners.map((npo) => {
              if (npo._id === item.npo_id) return npo.category;
            })}
          </td>

        </tr>
      ))}
    </>
  );

}

export function DonationTable(props) {
  return <table className={"styled-table"}>
    <thead>
    <tr>
      <th>Transactions ID</th>
      <th>Date</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Organization</th>
      <th>Category</th>
    </tr>
    </thead>
    <tbody>
    <DataTableRows data={props.data} user={props.user} />
    </tbody>
    <tfoot>
    <tr>
      <td></td>
      <td>TOTAL</td>
      <td>
        <CurrencyFormater numb={props.numb} />
      </td>
    </tr>
    </tfoot>
  </table>;
}