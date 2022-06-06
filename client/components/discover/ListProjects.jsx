import { Grid } from "@mui/material";
import { ProjectCard } from "./ProjectCard";

function filterBySearchWord(list, searchWord) {
  if (searchWord !== "") {
    return list.filter(
      (project) =>
        project.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        project.description.toLowerCase().includes(searchWord.toLowerCase()) ||
        project.category.toLowerCase().includes(searchWord.toLowerCase())
    );
  } else {
    return list;
  }
}

function filterByCategory(list, category) {
  if (category !== "") {
    return list.filter((project) => project.category === category);
  } else {
    return list;
  }
}

export function ListProjects(props) {
  const filteredListSearchword = filterBySearchWord(
    props.data,
    props.searchWord
  );

  const filteredListCategory = filterByCategory(
    filteredListSearchword,
    props.category
  );

  if (filteredListCategory.length === 0) {
    return <div>No match</div>;
  } else {
    return (
      <div>
        <Grid container columns={3} spacing={2} className={"card-container"}>
          {filteredListCategory.map((project) => (
            <Grid key={project._id} item className={"card-item"}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
