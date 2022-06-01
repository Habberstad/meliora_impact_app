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

export function PartnersList({ data, category }) {
  const filteredList = filterByCategory(data, category);

  return (
    <div className={"list-container"}>
      <Grid container>
        {filteredList.map((partner) => {
          return <PartnerCard key={partner._id} partner={partner} />;
        })}
      </Grid>
    </div>
  );
}
