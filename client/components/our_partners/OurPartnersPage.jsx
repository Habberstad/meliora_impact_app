import { HeaderPartner } from "./HeaderPartner";
import { CategoryFilter } from "../discover/CategoryFilter";
import "../../styles/partners-styles.css";
import { useState } from "react";

import { useLoader } from "../../helpers/UseLoader";
import { PartnersList } from "./PartnersList";

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

const OurPartnersPage = () => {
  const [category, setCategory] = useState("");
  /*const { getNpo } = useContext(NpoApiContext);*/
  const { loading, error, data } = useLoader(() => partners);

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
    <div className={"parntes-page-container"}>
      <div className={"partners-container"}>
        <HeaderPartner />
        <CategoryFilter onClick={categorySelectHandler} category={category} />
        <PartnersList data={data} category={category} />
      </div>
    </div>
  );
};
export default OurPartnersPage;
