import {
  CurrencyFormater,
  DateFormater
} from "../shared-components/dateFormater";
import * as React from "react";
import { useContext } from "react";
import { TransactionApiContext } from "../../api-client/transactionApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

function DataTableRows(props) {

  return (
    <>
      {props.data.map((item) => (
        <tr>
          <td>{item._id}</td>
          <td><DateFormater date={item.date} /></td>
          <td>{item.payment_frequency}</td>
          <td>
            {item.npo_name}
          </td>
          <td>
            {item.category}
          </td>
          <td>
            <CurrencyFormater numb={item.payment_amount} /></td>
        </tr>
      ))}
    </>
  );
}

export function DonationTable(props) {


  return (
    <table className={"styled-table-finances"}>
      <thead>
      <tr>
        <th>Transactions ID</th>
        <th>Date</th>
        <th>Type</th>
        <th>Name</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <DataTableRows data={props.data} />
      </tbody>
      <tfoot>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td>
          <CurrencyFormater numb={props.numb} />
        </td>
      </tr>
      </tfoot>
    </table>
  );
}
