export function DateFormater(props) {
  const date = new Date(props.date)
  const month = date.toLocaleString("no-NO", {month: "2-digit"});
  const day = date.toLocaleString("no-NO", {day: "2-digit"});

  const year = date.getFullYear();

  return (
    <div>
      {day +month  + year}
    </div>
    );

}



export function CurrencyFormater(props){
  return new Intl.NumberFormat("no-NO", { style: 'currency',   maximumFractionDigits: 0,
    minimumFractionDigits: 0,  currency: "NOK" }).format(props.numb)
}

