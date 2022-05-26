import { useContext, useState } from "react";
import { ListProjects } from "./ListProjects";
import { Searchbar } from "./Searchbar";
import { CategoryFilter } from "./CategoryFilter";
import "../../styles/discoverPage.css";
import { useLoading } from "../../useLoading";
import { NpoApiContext } from "../../api-client/npoApiContext";
import { isLoading } from "../shared-components/Loading";
import { HEADER } from "../headers/HEADER";
import headerImg from "../../media/articles_header_image.png";
import { GlobalHeader } from "../headers/GlobalHeader";
import { Error } from "../shared-components/Error";

const DiscoverPage = () => {
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  const [npoName, setNpoName] = useState("");
  const [_id, set_id] = useState("");
  const { listNpos } = useContext(NpoApiContext);
  const { loading, error, data } = useLoading(
    async () => await listNpos({ category }),
    [category]
  );

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
        title={HEADER[2].title}
        subtitle={HEADER[2].subtitle}
        desc={HEADER[2].desc}
        image={headerImg}
      />
      <CategoryFilter onClick={categorySelectHandler} category={category} />
      <br />
      <br />
      <Searchbar searchString={searchString} onChange={handleSearchInput} />
      <br />
      <br />
      <ListProjects data={data} category={category} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
