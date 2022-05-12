import { npos } from "../../data/npos";
import { useState } from "react";
import { ListNpo } from "./ListNpo";
import { KeywordFilter } from "./KeywordFilter";
import { CategoryFilter } from "./CategoryFilter";
import { Top } from "./Top";


const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(npos);

  function onclickHandler(event) {
    console.log(event.target.value);
    setCategoryFilter(event.target.value);
  }

  function handleSearchInput(event) {
    setSearchString(event.target.value);
  }

  return (
    <div className={"discover-page-container"}>

      <Top />
      <CategoryFilter onClick={onclickHandler.bind(this)} />
      <br /><br />
      <KeywordFilter searchString={searchString} onChange={handleSearchInput} />
      <br /><br />
      <ListNpo data={data} category={categoryFilter} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
