export function DateFormater(props) {
  const date = new Date(props.date)
  const month = date.toLocaleString("no-NO", {month: "long"});
  const day = date.toLocaleString("no-NO", {day: "2-digit"});
  console.log(date)
  const year = date.getFullYear();

  return (
    <div>
      {day + " " +month + " " + year}
    </div>
    );

}