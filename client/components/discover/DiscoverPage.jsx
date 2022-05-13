import { prosjects } from "../../data/prosjects";
import { useState } from "react";
import { ListNpo } from "./ListNpo";
import { KeywordFilter } from "./KeywordFilter";
import { CategoryFilter } from "./CategoryFilter";
import { Top } from "./Top";
import "../../styles/discoverPage.css";


const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(prosjects);

  function categorySelectHandler(selectedCategory) {
    setCategoryFilter(selectedCategory);
  }

  function handleSearchInput(event) {
    setSearchString(event.target.value);
  }

  return (
    <div className={"discover-page-container"}>
      <Top />
      <CategoryFilter onClick={categorySelectHandler} />
      <br /><br />
      <KeywordFilter searchString={searchString} onChange={handleSearchInput} />
      <br /><br />
      <ListNpo data={data} category={categoryFilter} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
