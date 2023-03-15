import "./style.css";
import projects from "../../data/projects.json";
import { useParams, Link } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();

  var selectedProject = projects.find( function( project ){
    return project.id === Number(id);
  });

  return (
    <div className="project">
      <h1>Project ID: {selectedProject.id}</h1>
      <h2>Client: {selectedProject.client_name}</h2>
      <h3>Client Location: {selectedProject.client_location}</h3>
      <p>Client Website: {selectedProject.website_url}</p>
      <p>Project start: {selectedProject.project_start_date}</p>
      <p>Current Project Length: {selectedProject.current_project_length}</p>
      <p>Estimated Cost: {selectedProject.estimated_costs}</p>
      <Link to={`/projects`}>Back to Project List</Link>

    </div>
  );
}

export default ProjectPage;
