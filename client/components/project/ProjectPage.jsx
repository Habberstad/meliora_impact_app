import { ProjectsApiContext } from "../discover/projectsApiContext";

export function ProjectPage() {
  return (
    <div>
      <ProjectsApiContext.Consumer>
        <h1>Project page</h1>

      </ProjectsApiContext.Consumer>
    </div>

  );
}