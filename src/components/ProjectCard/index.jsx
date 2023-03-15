import "./style.css";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

function ProjectCard(props) {

  return (
    <div className="project-card">
      <h2>Project ID: {props.id}</h2>
      <h3>Client: {props.client_name}</h3>
      <h3>Client Location: {props.client_location}</h3>
    </div>
  );
}

export default ProjectCard;
