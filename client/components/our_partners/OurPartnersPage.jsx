import { HeaderPartner } from "./HeaderPartner";
import { CategoryFilter } from "../discover/CategoryFilter";
import "../../styles/partners-styles.css";
import Grid from "@mui/material/Grid";
import * as PropTypes from "prop-types";
import { PartnerCard } from "./PartnerCard";

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
    category: "Education",
  },
];

PartnerCard.propTypes = { partner: PropTypes.any };
const OurPartnersPage = () => {
  return (
    <div className={"partners-container"}>
      <HeaderPartner />
      <CategoryFilter />
      <div className={"list-container"}>
        <Grid container direction="column" alignItems="stretch">
          {partners.map((partner) => {
            return <PartnerCard key={partner._id} partner={partner} />;
          })}
        </Grid>
      </div>
    </div>
  );
};
export default OurPartnersPage;
