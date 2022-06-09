import { CurrencyFormater } from "../shared-components/dateFormater";
import * as React from "react";
import { DataTableRows } from "./DataTableRows";

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
          <td />
          <td />
          <td />
          <td />
          <td>TOTAL</td>
          <td>
            <CurrencyFormater numb={props.numb} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
