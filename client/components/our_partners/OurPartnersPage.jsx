import { useContext, useState } from "react";
import "../../styles/partners-styles.css";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { HEADER } from "../headers/HEADER";
import headerImg from "../../media/headers/mynpos_header.svg";
import { CategoryFilter } from "../shared-components/CategoryFilter";
import { PartnersList } from "./PartnersList";
import { GlobalHeader } from "../headers/GlobalHeader";
import { useLoader } from "../../helpers/UseLoader";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";

const OurPartnersPage = (props) => {
  const [category, setCategory] = useState("");
  const { listNpos } = useContext(NpoApiContext);
  const { loading, error, data } = useLoader(
    async () => await listNpos({ category }),
    []
  );

  function categorySelectHandler(selectedCategory) {
    setCategory(selectedCategory);
  }

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  return (
    <div className={"partners-page-container"}>
      <div className={"partners-container"}>
        <GlobalHeader
          title={HEADER[0].title}
          subtitle={HEADER[0].subtitle}
          desc={HEADER[0].desc}
          image={headerImg}
        />
        <CategoryFilter onClick={categorySelectHandler} category={category} />
        <PartnersList
          data={data}
          category={category}
          activeSubs={props.user.npo_partners}
        />
      </div>
    </div>
  );
};
export default OurPartnersPage;
