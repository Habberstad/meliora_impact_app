import { MyNPOHeader } from "../headers/MyNPOHeader";
import { CategoryFilter } from "../discover/CategoryFilter";
import "../../styles/partners-styles.css";
import { useContext, useState } from "react";
import { useLoader } from "../../helpers/UseLoader";
import { PartnersList } from "./PartnersList";
import { NpoApiContext } from "../../api-client/npoApiContext";

const OurPartnersPage = () => {
  const [category, setCategory] = useState("");
  const { getNpo } = useContext(NpoApiContext);
  const { loading, error, data } = useLoader(
    async () => await getNpo({ category }),
    [category]
  );

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
    <div className={"partners-page-container"}>
      <div className={"partners-container"}>
        <MyNPOHeader />
        <CategoryFilter onClick={categorySelectHandler} category={category} />
        <PartnersList data={data} category={category} />
      </div>
    </div>
  );
};
export default OurPartnersPage;
