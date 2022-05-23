import { HeaderPartner } from "./HeaderPartner";
import { CategoryFilter } from "../discover/CategoryFilter";
import "../../styles/partners-styles.css";
import Grid from "@mui/material/Grid";
import { PartnerCard } from "./PartnerCard";
import { useState } from "react";

import { useLoader } from "../../helpers/UseLoader";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { useContext } from "react";

const partners = [
  {
    _id: "1",
    name: "Leve havet",
    imgage:
      "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quisque sed sed eleifend tempor ",
    category: "Water",
  },
  {
    _id: "2",
    name: "Good school",
    imgage:
      "https://www.uidownload.com/files/893/147/580/big-white-circle-background.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quisque sed sed eleifend tempor ",
    category: "Knowledge",
  },
  {
    _id: "3",
    name: "Leve havet",
    imgage:
      "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quisque sed sed eleifend tempor ",
    category: "Water",
  },
];

function filterBySearchWord(list, searchWord) {
  if (searchWord !== "") {
    console.log("hei");
    return list.filter((partner) =>
      partner.category.toLowerCase().includes(searchWord)
    );
  } else {
    return list;
  }
}

const OurPartnersPage = () => {
  const [category, setCategory] = useState("");
  /*const { getNpo } = useContext(NpoApiContext);*/
  const { loading, error, data } = useLoader(() => partners);
  const filteredList = filterBySearchWord(data, category);

  function categorySelectHandler(selectedCategory) {
    setCategory(selectedCategory);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
  }
  return (
    <div className={"partners-container"}>
      <HeaderPartner />
      <CategoryFilter onClick={categorySelectHandler} category={category} />
      <div className={"list-container"}>
        <Grid container direction="column" alignItems="stretch">
          {filteredList.map((partner) => {
            return <PartnerCard key={partner._id} partner={partner} />;
          })}
        </Grid>
      </div>
    </div>
  );
};
export default OurPartnersPage;
