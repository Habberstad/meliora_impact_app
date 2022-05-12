import "../../global-styles.css";
import { npos } from "../../data/npos";
import { useState } from "react";
import { ListNpo, NpoCard } from "./ListNpo";
import { KeywordFilter } from "./KeywordFilter";
import { CategoryFilter } from "./CategoryFilter";


const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(npos);
  const user1 = {name: "john", preferences:"water"}

  function onclickHandler(event) {
    console.log(event.target.value)
    setCategoryFilter(event.target.value);
  }

  function handleSearchInput(event) {
    setSearchString(event.target.value);
  }

  return (
    <div>
      <div>
        <h3>Discover</h3>
        <p>Explore other projects</p>
        <p><strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet scriptorem, eos dolore evertitur ei, ferri
          omnium sea at.</p>
      </div>

      <br /><br />
      <CategoryFilter onClick={onclickHandler.bind(this)} />
      <br /><br />
      <KeywordFilter searchString={searchString} onChange={handleSearchInput} />
      <br /><br />
      <ListNpo data={data} category={categoryFilter} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
