import {
  CurrencyFormater,
  DateFormater
} from "../shared-components/dateFormater";
import * as React from "react";
import { useContext } from "react";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { useLoading } from "../../useLoading";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

function DataTableRows(props) {
  const { listNpos } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(
    async () => await listNpos(),
    []
  );

  if (loading) return isLoading();
  if (error) return <Error error={error} />;


  return (
    <>
      {props.data.map((item) => (
        <tr>
          <td>{item._id}</td>
          <td><DateFormater date={item.date} /></td>
          <td>{item.payment_frequency}</td>
          <td>
            {data.map((npo) => {
              if (npo._id === item.npo_id) return npo.name;
            })}
          </td>
          <td>
            {data.map((npo) => {
              if (npo._id === item.npo_id) return npo.category;
            })}
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
      <DataTableRows data={props.data} user={props.user} />
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
