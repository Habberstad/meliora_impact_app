import Grid from "@mui/material/Grid";
import { PartnerCard } from "./PartnerCard";

const filterByCategory = (array, category) => {
  if (category !== "") {
    return array.filter((partner) =>
      partner.category.toLowerCase().includes(category)
    );
  } else {
    return array;
  }
};

const filterByActiveSubs = (unfilteredList, mySubs) => {
  const filtered = [];

  for (let i = 0; i < unfilteredList.length; i++) {
    for (let j = 0; j < mySubs.length; j++) {
      if (unfilteredList[i]._id === mySubs[j]._id)
        filtered.push(unfilteredList[i]);
    }
  }

  return filtered;
};

export function PartnersList({ data, category, activeSubs }) {
  const filteredList1 = filterByCategory(data, category);
  const filteredList2 = filterByActiveSubs(filteredList1, activeSubs);

  return (
    <div className={"list-container"}>
      <Grid container>
        {filteredList2.map((partner) => {
          return <PartnerCard key={partner._id} partner={partner} />;
        })}
      </Grid>
    </div>
  );
}
