import "./style.css";
import Project from "../Project";
import projects from "../../data/projects.json";

function ProjectList() {
  return (
    <div className="projectList">
      <h1>ProjectList</h1>
      {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
    </div>
  );
}

export default ProjectList;
