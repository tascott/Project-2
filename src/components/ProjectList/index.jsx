import "./style.css";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";

function ProjectList() {
  return (
    <div className="projectListContainer">
      <h1>ProjectList</h1>
      <div className="projectList">
      {projects.map((project) => (
        <div className="projectCardContainer" key={project.id}>
          <ProjectCard key={project.id} {...project} />
          <Link to={`/projects/${project.urlFriendlyName}`}>View Project</Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ProjectList;
