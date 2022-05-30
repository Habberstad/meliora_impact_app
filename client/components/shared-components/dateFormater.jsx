export function DateFormater(props) {
  const month = props.date.toLocaleString("no-NO", {month: "long"});
  const day = props.date.toLocaleString("no-NO", {day: "2-digit"});
  const year = props.date.getFullYear();

  return (
    <div>
      {day + "." + month + "." + year}
    </div>
    )

}