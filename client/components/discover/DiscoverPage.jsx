import { prosjects } from "../../data/prosjects";
import { useContext, useState } from "react";
import { ListNpo } from "./ListNpo";
import { KeywordFilter } from "./KeywordFilter";
import { CategoryFilter } from "./CategoryFilter";
import { Top } from "./Top";
import "../../styles/discoverPage.css";
import { ProjectsApiContext } from "./projectsApiContext";
import { useLoading } from "../../useLoading";



const DiscoverPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchString, setSearchString] = useState("");

  const { listProjects } = useContext(ProjectsApiContext);
  const { loading, error, data } = useLoading(
    async () => await listProjects(),
    []
  );

  function categorySelectHandler(selectedCategory) {
    setCategoryFilter(selectedCategory);
  }

  function handleSearchInput(event) {
    setSearchString(event.target.value);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );
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
