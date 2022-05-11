import "../../global-styles.css";
import { npos } from "../../data/npos";
import { useState } from "react";

function NpoCard({ npo: { name, description, category } }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
    </div>
  );
}

function KeywordFilter(props) {
  return (
    <div>
      <label>Search: </label>
      <div>test: {props.searchString}</div>
      <input type={"text"} onChange={props.onChange} />
    </div>
  );
}

const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const data = npos;

  function onclickHandler(category) {
    setCategoryFilter(category);
  }

  function listNpoByCategory() {

    if (categoryFilter === "") {
      return data;
    } else {
      return data.filter(npo => npo.category === categoryFilter);
    }
  }


  function ListNpo() {
    let testList = listNpoByCategory();

    if (searchString !== ""){
      testList = testList.filter((npo) => npo.name.toLowerCase().includes(searchString.toLowerCase()));
    }


    return (
      <div className={"npo-list-container"}>
        {testList.map((npo) => (
          <NpoCard key={npo.id} npo={npo} />
        ))}
      </div>
    );
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

      <h3>filter on: {categoryFilter}</h3>

      <div className={"filter-bar"}>
        <button onClick={() => onclickHandler("")}>All</button>
        <button onClick={() => onclickHandler("water")}>Water</button>
        <button onClick={() => onclickHandler("education")}>Education</button>
        <button onClick={() => onclickHandler("ocean")}>Ocean</button>
        <button onClick={() => onclickHandler("health")}>Health</button>
      </div>
      <KeywordFilter searchString={searchString} onChange={handleSearchInput} />
      <ListNpo />
    </div>
  );
};

export default DiscoverPage;
