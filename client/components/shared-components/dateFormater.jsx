export function DateFormater(props) {
  const date = new Date(props.date);
  const month = date.toLocaleString("no-NO", { month: "long" });
  const day = date.toLocaleString("no-NO", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div style={{ fontSize: "12px", fontWeight: "400" }}>
      {day + " " + month + " " + year}
    </div>
  );
}
