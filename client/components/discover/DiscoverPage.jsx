import { useContext, useState } from "react";
import { ListProjects } from "./ListProjects";
import { Searchbar } from "./Searchbar";
import { CategoryFilter } from "./CategoryFilter";
import { Top } from "./Top";
import "../../styles/discoverPage.css";
import { ProjectsApiContext } from "../../api-client/projectsApiContext";
import { useLoading } from "../../useLoading";



const DiscoverPage = () => {
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("")
  const [npoName, setNpoName] = useState("")
  const [_id, set_id] = useState("")

  const { listProjects } = useContext(ProjectsApiContext);
  const { loading, error, data } = useLoading(
    async () => await listProjects({ category, npoName, _id }),
    [category]
  );

  function categorySelectHandler(selectedCategory) {
    setCategory(selectedCategory);
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
      <CategoryFilter onClick={categorySelectHandler} category={category} />
      <br /><br />
      <Searchbar searchString={searchString} onChange={handleSearchInput} />
      <br /><br />
      <ListProjects data={data} category={category} searchWord={searchString} />
    </div>
  );
};

export default DiscoverPage;
