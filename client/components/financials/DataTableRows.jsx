import {
  CurrencyFormater,
  DateFormater,
} from "../shared-components/dateFormater";

export function DataTableRows(props) {
  return (
    <>
      {props.data.map((item) => (
        <tr key={item._id}>
          <td>{item._id}</td>
          <td>
            <DateFormater date={item.date} />
          </td>
          <td>{item.payment_frequency}</td>
          <td>{item.npo_name}</td>
          <td>{item.category}</td>
          <td>
            <CurrencyFormater numb={item.payment_amount} />
          </td>
        </tr>
      ))}
    </>
  );
}
