import "../../global-styles.css";
import { npos } from "../../data/npos";
import { useState } from "react";
import * as PropTypes from "prop-types";
import { ListNpo } from "./ListNpo";
import { KeywordFilter } from "./KeywordFilter";
import { CategoryFilter } from "./CategoryFilter";


const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(npos);

  function onclickHandler(event) {
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
        <br />
        <p><strong>Lorem</strong> ipsum dolor sit amet, sed ea solum movet scriptorem, eos dolore evertitur ei, ferri
          omnium sea at.</p>
      </div>

      <CategoryFilter onClick={onclickHandler.bind(this)} />
      <br />
      <br />
      <KeywordFilter searchString={searchString} onChange={handleSearchInput} />
      <br />
      <br />
      <ListNpo data={data} category={categoryFilter} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
