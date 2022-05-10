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

const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const data = npos;

  function onclickHandler(category) {
    setCategoryFilter(category);
    console.log(categoryFilter);
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

      <div className={"filter-bar"}>
        <h3>filter on: {categoryFilter}</h3>
        <button onClick={() => onclickHandler("all")}>All</button>
        <button onClick={() => onclickHandler("water")}>Water</button>
        <button onClick={() => onclickHandler("education")}>Education</button>
        <button onClick={() => onclickHandler("ocean")}>Ocean</button>
        <button onClick={() => onclickHandler("health")}>Health</button>
      </div>

      <div className={"npo-list-container"}>
        {data.map((npo) => (
          <NpoCard key={npo.id} npo={npo} />
        ))}
      </div>

    </div>
  );
};

export default DiscoverPage;
