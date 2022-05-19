import { HeaderPartner } from "./HeaderPartner";
import { CategoryFilter } from "../discover/CategoryFilter";
import "../../styles/partners-styles.css";

const OurPartnersPage = () => {
  return (
    <div className={"partners-container"}>
      <HeaderPartner />
      <CategoryFilter />
      <div className={"list-container"}>hei</div>
    </div>
  );
};
export default OurPartnersPage;
