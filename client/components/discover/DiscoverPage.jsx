import { useContext, useState } from "react";
import { ListProjects } from "./ListProjects";
import { Searchbar } from "./Searchbar";
import { CategoryFilter } from "../shared-components/CategoryFilter";
import "../../styles/discoverPage.css";
import { useLoading } from "../../useLoading";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { isLoading } from "../shared-components/Loading";
import headerImg from "../../media/headers/discover_header.svg";
import { GlobalHeader } from "../headers/GlobalHeader";
import { Error } from "../shared-components/Error";

const DiscoverPage = () => {
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  const { listNpos } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(async () => await listNpos());

  function categorySelectHandler(selectedCategory) {
    setCategory(selectedCategory);
  }

  function handleSearchInput(event) {
    setSearchString(event.target.value);
  }

  if (loading) return isLoading();
  if (error) return <Error error={error} />;

  return (
    <div className={"discover-page-container"}>
      <GlobalHeader
        title={"Discover"}
        subtitle={"Explore other NPOs"}
        desc={
          "Dive in and learn about which projects our passionate NPOs are engaged with. Quickly sort and collaborate on different propositions we can offer."
        }
        image={headerImg}
      />
      <CategoryFilter onClick={categorySelectHandler} category={category} />
      <Searchbar searchString={searchString} onChange={handleSearchInput} />
      <br />
      <br />
      <ListProjects data={data} category={category} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
